/* ============================================================
 * crocus-server.c — silent background server for Crocus
 * ------------------------------------------------------------
 * - Serves the Crocus web app on port 8000
 * - Blocks websites by writing to the Windows hosts file
 * - Self-elevates via UAC only when saving the blocklist
 * - Saves notes as real .crocusnote files in notes/
 * - Serves user-added sounds from sounds/user/
 * - Runs silently (no console window)
 * - Silent by default (no browser opens)
 * - Pass --open-browser to open the default browser on startup
 * - Pass --apply-hosts for the elevated hosts-writer mode
 *
 * Build (Windows):
 *   gcc crocus-server.c -o crocus-server.exe ^
 *       -lws2_32 -lshell32 -lole32 -ladvapi32 -O2 -mwindows
 *
 * Build (macOS/Linux):
 *   gcc crocus-server.c -o crocus-server -O2 -lpthread
 * ============================================================ */

#ifdef _WIN32
    #define _WIN32_WINNT 0x0600
#endif

/* ??? PLATFORM ?????????????????????????????????????????????? */
#ifdef _WIN32
    #define WIN32_LEAN_AND_MEAN
    #include <winsock2.h>
    #include <ws2tcpip.h>
    #include <windows.h>
    #include <objbase.h>
    #include <shellapi.h>
    #include <direct.h>
    #include <io.h>
    typedef SOCKET socket_t;
    #define CLOSE_SOCKET closesocket
    #define SLEEP_MS(ms) Sleep(ms)
    #define PATH_SEP '\\'
#else
    #include <sys/socket.h>
    #include <sys/types.h>
    #include <sys/stat.h>
    #include <netinet/in.h>
    #include <arpa/inet.h>
    #include <netdb.h>
    #include <unistd.h>
    #include <signal.h>
    #include <pthread.h>
    typedef int socket_t;
    #define INVALID_SOCKET (-1)
    #define SOCKET_ERROR (-1)
    #define CLOSE_SOCKET close
    #define SLEEP_MS(ms) usleep((ms) * 1000)
    #define PATH_SEP '/'
#endif

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <stdarg.h>
#include <time.h>
#include <ctype.h>
#include <errno.h>
#include <dirent.h>
#include <sys/stat.h>

/* ??? CONFIG ???????????????????????????????????????????????? */
#define DEFAULT_PORT   8000
#define NOTES_DIR      "notes"
#define LOG_FILE       "crocus-server.log"
#define BLOCKLIST_FILE "blocklist.txt"
#define TASKS_FILE     "tasks.crocustask"
#define SOUNDS_DIR     "sounds"
#define USER_SOUNDS_DIR "sounds/user"

#define HOSTS_MARK_START "# Crocus blocklist -- start"
#define HOSTS_MARK_END   "# Crocus blocklist -- end"

#ifdef _WIN32
    #define HOSTS_FILE "C:\\Windows\\System32\\drivers\\etc\\hosts"
#else
    #define HOSTS_FILE "/etc/hosts"
#endif

#define MAX_REQ_LEN    (64 * 1024)
#define MAX_BODY_LEN   (8  * 1024 * 1024)

static int g_running = 1;
static const char* g_notes_dir = NOTES_DIR;
static char g_blocklist_path[512];

/* ??? LOGGING ?????????????????????????????????????????????? */
static FILE* g_log = NULL;

static void log_init(void) {
    g_log = fopen(LOG_FILE, "a");
    if (g_log) {
        time_t t = time(NULL);
        struct tm* tm = localtime(&t);
        char buf[64];
        strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", tm);
        fprintf(g_log, "\n=== Crocus server started at %s ===\n", buf);
        fflush(g_log);
    }
}

static void log_line(const char* fmt, ...) {
    if (!g_log) return;
    time_t t = time(NULL);
    struct tm* tm = localtime(&t);
    char tbuf[16];
    strftime(tbuf, sizeof(tbuf), "%H:%M:%S", tm);
    fprintf(g_log, "[%s] ", tbuf);
    va_list ap;
    va_start(ap, fmt);
    vfprintf(g_log, fmt, ap);
    va_end(ap);
    fprintf(g_log, "\n");
    fflush(g_log);
}

static void log_close(void) {
    if (g_log) {
        log_line("Server shutting down.");
        fclose(g_log);
        g_log = NULL;
    }
}

/* ??? STRING HELPERS ??????????????????????????????????????? */
static int str_ieq(const char* a, const char* b) {
    while (*a && *b) {
        if (tolower((unsigned char)*a) != tolower((unsigned char)*b)) return 0;
        a++; b++;
    }
    return *a == 0 && *b == 0;
}

static const char* strcasestr_local(const char* hay, const char* needle) {
    if (!*needle) return hay;
    for (; *hay; hay++) {
        const char* h = hay;
        const char* n = needle;
        while (*h && *n &&
               tolower((unsigned char)*h) == tolower((unsigned char)*n)) {
            h++; n++;
        }
        if (!*n) return hay;
    }
    return NULL;
}

/* ??? PATH HELPERS ????????????????????????????????????????? */
static int file_exists(const char* path) {
    struct stat st;
    return stat(path, &st) == 0;
}

static int is_dir(const char* path) {
    struct stat st;
    if (stat(path, &st) != 0) return 0;
    return (st.st_mode & S_IFMT) == S_IFDIR;
}

static int make_dir(const char* path) {
#ifdef _WIN32
    return _mkdir(path) == 0 || errno == EEXIST;
#else
    return mkdir(path, 0755) == 0 || errno == EEXIST;
#endif
}

static void join_path(char* out, size_t out_sz, const char* a, const char* b) {
    snprintf(out, out_sz, "%s%c%s", a, PATH_SEP, b);
}

/* ??? FILE I/O ????????????????????????????????????????????? */
static char* read_file(const char* path, size_t* out_len) {
    FILE* f = fopen(path, "rb");
    if (!f) return NULL;
    fseek(f, 0, SEEK_END);
    long sz = ftell(f);
    if (sz < 0) { fclose(f); return NULL; }
    fseek(f, 0, SEEK_SET);
    char* buf = (char*)malloc((size_t)sz + 1);
    if (!buf) { fclose(f); return NULL; }
    size_t got = fread(buf, 1, (size_t)sz, f);
    fclose(f);
    buf[got] = 0;
    if (out_len) *out_len = got;
    return buf;
}

static int write_file(const char* path, const char* data, size_t len) {
    FILE* f = fopen(path, "wb");
    if (!f) return 0;
    size_t wrote = fwrite(data, 1, len, f);
    fclose(f);
    return wrote == len;
}

static int delete_file(const char* path) {
    return remove(path) == 0;
}

static void safe_append(char* buf, size_t cap, size_t* pos, const char* fmt, ...) {
    if (*pos >= cap) return;
    va_list ap;
    va_start(ap, fmt);
    int n = vsnprintf(buf + *pos, cap - *pos, fmt, ap);
    va_end(ap);
    if (n > 0) {
        *pos += (size_t)n;
        if (*pos > cap) *pos = cap;
    }
}

/* ??? MIME ????????????????????????????????????????????????? */
static const char* mime_type(const char* path) {
    const char* dot = strrchr(path, '.');
    if (!dot) return "application/octet-stream";
    dot++;
    if (!strcmp(dot, "html")) return "text/html; charset=utf-8";
    if (!strcmp(dot, "css"))  return "text/css; charset=utf-8";
    if (!strcmp(dot, "js"))   return "application/javascript; charset=utf-8";
    if (!strcmp(dot, "json")) return "application/json; charset=utf-8";
    if (!strcmp(dot, "svg"))  return "image/svg+xml";
    if (!strcmp(dot, "png"))  return "image/png";
    if (!strcmp(dot, "jpg") || !strcmp(dot, "jpeg")) return "image/jpeg";
    if (!strcmp(dot, "ico"))  return "image/x-icon";
    if (!strcmp(dot, "woff")) return "font/woff";
    if (!strcmp(dot, "woff2")) return "font/woff2";
    if (!strcmp(dot, "ttf"))  return "font/ttf";
    if (!strcmp(dot, "wav"))  return "audio/wav";
    if (!strcmp(dot, "mp3"))  return "audio/mpeg";
    if (!strcmp(dot, "ogg"))  return "audio/ogg";
    if (!strcmp(dot, "m4a"))  return "audio/mp4";
    if (!strcmp(dot, "flac")) return "audio/flac";
    if (!strcmp(dot, "aac"))  return "audio/aac";
    if (!strcmp(dot, "opus")) return "audio/opus";
    if (!strcmp(dot, "webm")) return "audio/webm";
    if (!strcmp(dot, "txt"))  return "text/plain; charset=utf-8";
    if (!strcmp(dot, "crocusnote")) return "text/plain; charset=utf-8";
    return "application/octet-stream";
}

/* ??? URL ?????????????????????????????????????????????????? */
static void url_decode(const char* in, char* out, size_t out_sz) {
    size_t j = 0;
    for (size_t i = 0; in[i] && j + 1 < out_sz; i++) {
        if (in[i] == '%' && isxdigit((unsigned char)in[i+1]) && isxdigit((unsigned char)in[i+2])) {
            char hex[3] = { in[i+1], in[i+2], 0 };
            out[j++] = (char)strtol(hex, NULL, 16);
            i += 2;
        } else if (in[i] == '+') {
            out[j++] = ' ';
        } else {
            out[j++] = in[i];
        }
    }
    out[j] = 0;
}

static void strip_query(const char* in, char* out, size_t out_sz) {
    size_t i = 0;
    while (in[i] && in[i] != '?' && i + 1 < out_sz) {
        out[i] = in[i];
        i++;
    }
    out[i] = 0;
}

/* ??? FILENAME SANITIZER ??????????????????????????????????? */
static int sanitize_name(const char* in, char* out, size_t out_sz) {
    if (!in || !*in) return 0;
    char base[512];
    size_t blen = 0;
    while (in[blen] && blen < sizeof(base) - 1) { base[blen] = in[blen]; blen++; }
    base[blen] = 0;
    char* slash1 = strrchr(base, '/');
    char* slash2 = strrchr(base, '\\');
    char* last_slash = slash1 > slash2 ? slash1 : slash2;
    char* name = last_slash ? last_slash + 1 : base;
    if (!*name) return 0;
    size_t j = 0;
    for (size_t i = 0; name[i] && j + 1 < out_sz; i++) {
        unsigned char c = (unsigned char)name[i];
        if (isalnum(c) || c == '_' || c == '-' || c == '.' || c == ' ') out[j++] = (char)c;
    }
    if (j == 0) return 0;
    int all_dots = 1;
    for (size_t i = 0; i < j; i++) if (out[i] != '.') { all_dots = 0; break; }
    if (all_dots) return 0;
    const char* suffix = ".crocusnote";
    size_t slen = strlen(suffix);
    if (j < slen || strcmp(out + j - slen, suffix) != 0) {
        if (j + slen + 1 >= out_sz) return 0;
        memcpy(out + j, suffix, slen + 1);
    }
    return 1;
}

/* ??? NOTES LIST ??????????????????????????????????????????? */
static char* list_notes_json(size_t* out_len) {
    DIR* d = opendir(g_notes_dir);
    if (!d) {
        const char* empty = "{\"notes\":[]}";
        size_t el = strlen(empty);
        char* buf = (char*)malloc(el + 1);
        if (!buf) return NULL;
        memcpy(buf, empty, el + 1);
        if (out_len) *out_len = el;
        return buf;
    }
    size_t cap = 4096, len = 0;
    char* buf = (char*)malloc(cap);
    if (!buf) { closedir(d); return NULL; }
    len += snprintf(buf + len, cap - len, "{\"notes\":[");
    int first = 1;
    struct dirent* ent;
    while ((ent = readdir(d)) != NULL) {
        const char* name = ent->d_name;
        size_t nlen = strlen(name);
        const char* suffix = ".crocusnote";
        size_t slen = strlen(suffix);
        if (nlen <= slen) continue;
        if (strcmp(name + nlen - slen, suffix) != 0) continue;
        char base[256];
        size_t blen = nlen - slen;
        if (blen >= sizeof(base)) blen = sizeof(base) - 1;
        memcpy(base, name, blen);
        base[blen] = 0;
        if (len + blen + 32 >= cap) {
            cap *= 2;
            char* nb = (char*)realloc(buf, cap);
            if (!nb) { free(buf); closedir(d); return NULL; }
            buf = nb;
        }
        if (!first) buf[len++] = ',';
        first = 0;
        len += snprintf(buf + len, cap - len, "\"%s\"", base);
    }
    closedir(d);
    if (len + 16 >= cap) {
        cap += 16;
        char* nb = (char*)realloc(buf, cap);
        if (!nb) { free(buf); return NULL; }
        buf = nb;
    }
    len += snprintf(buf + len, cap - len, "]}");
    if (out_len) *out_len = len;
    return buf;
}

/* ??? BLOCKLIST ???????????????????????????????????????????? */
static char* blocklist_as_json(size_t* out_len) {
    FILE* f = fopen(g_blocklist_path, "r");
    size_t cap = 1024, len = 0;
    char* buf = (char*)malloc(cap);
    if (!buf) return NULL;
    len += snprintf(buf + len, cap - len, "{\"blocked\":[");
    int first = 1;

    if (f) {
        char line[512];
        while (fgets(line, sizeof(line), f)) {
            size_t n = strlen(line);
            while (n > 0 && (line[n-1] == '\n' || line[n-1] == '\r' ||
                             line[n-1] == ' '  || line[n-1] == '\t')) n--;
            line[n] = 0;
            char* p = line;
            while (*p == ' ' || *p == '\t') p++;
            if (!*p || *p == '#') continue;

            if (len + n + 8 >= cap) {
                cap = cap * 2 + n;
                char* nb = (char*)realloc(buf, cap);
                if (!nb) { free(buf); fclose(f); return NULL; }
                buf = nb;
            }
            if (!first) buf[len++] = ',';
            first = 0;
            len += snprintf(buf + len, cap - len, "\"%s\"", p);
        }
        fclose(f);
    }

    len += snprintf(buf + len, cap - len, "]}");
    if (out_len) *out_len = len;
    return buf;
}

static int blocklist_read_domains(char domains[][256], int max) {
    int count = 0;
    FILE* f = fopen(g_blocklist_path, "r");
    if (!f) return 0;
    char line[512];
    while (fgets(line, sizeof(line), f) && count < max) {
        size_t n = strlen(line);
        while (n > 0 && (line[n-1] == '\n' || line[n-1] == '\r' ||
                         line[n-1] == ' '  || line[n-1] == '\t')) n--;
        line[n] = 0;
        char* p = line;
        while (*p == ' ' || *p == '\t') p++;
        if (!*p || *p == '#') continue;
        if (n >= 256) continue;
        int i = 0;
        for (; p[i] && i < 255; i++) domains[count][i] = (char)tolower((unsigned char)p[i]);
        domains[count][i] = 0;
        count++;
    }
    fclose(f);
    return count;
}

/* ??? HOSTS FILE ??????????????????????????????????????????? */
static int hosts_contains_domain(const char* content, const char* domain) {
    const char* p = content;
    size_t dlen = strlen(domain);
    while ((p = strstr(p, domain)) != NULL) {
        char after = p[dlen];
        char before = (p == content) ? '\n' : p[-1];
        if ((after == 0 || after == '\n' || after == '\r' || after == ' ' || after == '\t') &&
            (before == '\n' || before == '\r' || before == ' ' || before == '\t')) {
            const char* ls = p;
            while (ls > content && ls[-1] != '\n') ls--;
            if (strstr(ls, "127.0.0.1") && (size_t)(p - ls) < 64) {
                return 1;
            }
        }
        p += dlen;
    }
    return 0;
}

static int hosts_write_blocklist(void) {
    static char domains[512][256];
    int count = blocklist_read_domains(domains, 512);

    size_t content_len = 0;
    char* content = read_file(HOSTS_FILE, &content_len);
    if (!content) content = strdup("");
    if (!content) return 0;

    const char* START = HOSTS_MARK_START;
    const char* END   = HOSTS_MARK_END;

    char* start_pos = strstr(content, START);
    char* end_pos = start_pos ? strstr(start_pos, END) : NULL;

    char* after_end = NULL;
    if (end_pos) {
        after_end = strchr(end_pos, '\n');
        if (after_end) after_end++;
    }

    size_t prefix_len = start_pos ? (size_t)(start_pos - content) : content_len;
    size_t suffix_offset = after_end ? (size_t)(after_end - content) : content_len;
    size_t suffix_len = content_len - suffix_offset;

    size_t cap = prefix_len + suffix_len + 4096;
    for (int i = 0; i < count; i++) cap += strlen(domains[i]) * 2 + 64;

    char* out = (char*)malloc(cap);
    if (!out) { free(content); return 0; }

    size_t w = 0;

    if (prefix_len > 0) {
        memcpy(out + w, content, prefix_len);
        w += prefix_len;
        if (w > 0 && out[w-1] != '\n') out[w++] = '\n';
    }

    safe_append(out, cap, &w, "%s\n", START);
    for (int i = 0; i < count; i++) {
        safe_append(out, cap, &w, "127.0.0.1\t%s\n", domains[i]);
        if (strncmp(domains[i], "www.", 4) != 0) {
            safe_append(out, cap, &w, "127.0.0.1\twww.%s\n", domains[i]);
        }
    }
    safe_append(out, cap, &w, "%s\n", END);

    if (suffix_len > 0) {
        if (w > 0 && out[w-1] != '\n') out[w++] = '\n';
        memcpy(out + w, content + suffix_offset, suffix_len);
        w += suffix_len;
    }

    int ok = write_file(HOSTS_FILE, out, w);
    free(out);
    free(content);

    if (ok) {
        log_line("Hosts file updated: %d domains", count);
#ifdef _WIN32
        system("ipconfig /flushdns >nul 2>&1");
#else
        system("sync");
#endif
    } else {
        log_line("Hosts file write FAILED");
    }
    return ok;
}

static int hosts_is_in_sync(void) {
    static char domains[512][256];
    int count = blocklist_read_domains(domains, 512);

    size_t content_len = 0;
    char* content = read_file(HOSTS_FILE, &content_len);
    if (!content) return 0;

    char* start_pos = strstr(content, HOSTS_MARK_START);
    char* end_pos = start_pos ? strstr(start_pos, HOSTS_MARK_END) : NULL;

    if (!start_pos || !end_pos) {
        free(content);
        return count == 0;
    }

    size_t sec_len = (size_t)(end_pos - start_pos);
    char* section = (char*)malloc(sec_len + 1);
    if (!section) { free(content); return 0; }
    memcpy(section, start_pos, sec_len);
    section[sec_len] = 0;

    int ok = 1;
    for (int i = 0; i < count; i++) {
        if (!hosts_contains_domain(section, domains[i])) {
            ok = 0;
            break;
        }
    }
    free(section);
    free(content);
    return ok;
}

/* ??? ELEVATION ???????????????????????????????????????????? */
#ifdef _WIN32
static int is_elevated(void) {
    BOOL elevated = FALSE;
    HANDLE token = NULL;
    if (OpenProcessToken(GetCurrentProcess(), TOKEN_QUERY, &token)) {
        TOKEN_ELEVATION e;
        DWORD sz = sizeof(e);
        if (GetTokenInformation(token, TokenElevation, &e, sizeof(e), &sz)) {
            elevated = e.TokenIsElevated;
        }
        CloseHandle(token);
    }
    return elevated;
}

static int spawn_elevated_hosts_writer(void) {
    char exe[MAX_PATH];
    if (!GetModuleFileNameA(NULL, exe, MAX_PATH)) return 0;

    SHELLEXECUTEINFOA sei;
    memset(&sei, 0, sizeof(sei));
    sei.cbSize = sizeof(sei);
    sei.fMask = SEE_MASK_NOCLOSEPROCESS;
    sei.lpVerb = "runas";
    sei.lpFile = exe;
    sei.lpParameters = "--apply-hosts";
    sei.lpDirectory = NULL;
    sei.nShow = SW_HIDE;

    if (!ShellExecuteExA(&sei)) {
        log_line("ShellExecuteEx(runas) failed — user cancelled UAC or error");
        return 0;
    }

    log_line("Elevated helper spawned (pid %lu)", (unsigned long)GetProcessId(sei.hProcess));
    CloseHandle(sei.hProcess);
    return 1;
}
#else
static int is_elevated(void) { return geteuid() == 0; }
static int spawn_elevated_hosts_writer(void) { return 0; }
#endif

/* ??? HTTP RESPONSE ???????????????????????????????????????? */
static void send_response(socket_t client, int status, const char* status_text,
                          const char* content_type,
                          const char* extra_headers,
                          const char* body, size_t body_len) {
    char header[2048];
    int n = snprintf(header, sizeof(header),
        "HTTP/1.1 %d %s\r\n"
        "Content-Type: %s\r\n"
        "Content-Length: %zu\r\n"
        "Access-Control-Allow-Origin: *\r\n"
        "Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS\r\n"
        "Access-Control-Allow-Headers: Content-Type\r\n"
        "Cache-Control: no-cache\r\n"
        "%s"
        "Connection: close\r\n"
        "\r\n",
        status, status_text, content_type, body_len,
        extra_headers ? extra_headers : "");
    send(client, header, n, 0);
    if (body && body_len > 0) send(client, body, (int)body_len, 0);
}

static void send_json(socket_t client, int status, const char* status_text,
                      const char* json) {
    send_response(client, status, status_text,
                  "application/json; charset=utf-8", NULL,
                  json, strlen(json));
}

static void send_error(socket_t client, int status, const char* status_text,
                       const char* message) {
    char body[512];
    snprintf(body, sizeof(body),
             "{\"error\":\"%s\",\"status\":%d}", message, status);
    send_json(client, status, status_text, body);
}

/* ??? STATIC ??????????????????????????????????????????????? */
static void serve_static(socket_t client, const char* url_path) {
    char clean[1024];
    if (!strcmp(url_path, "/") || !strcmp(url_path, "")) {
        strcpy(clean, "/index.html");
    } else {
        strncpy(clean, url_path, sizeof(clean) - 1);
        clean[sizeof(clean) - 1] = 0;
    }
    if (strstr(clean, "..")) {
        send_error(client, 403, "Forbidden", "path traversal denied");
        return;
    }
    char rel[1024];
    strncpy(rel, clean + 1, sizeof(rel) - 1);
    rel[sizeof(rel) - 1] = 0;
    char decoded[1024];
    url_decode(rel, decoded, sizeof(decoded));
    char fspath[1024];
    size_t j = 0;
    for (size_t i = 0; decoded[i] && j + 1 < sizeof(fspath); i++) {
        if (decoded[i] == '/') fspath[j++] = PATH_SEP;
        else fspath[j++] = decoded[i];
    }
    fspath[j] = 0;
    if (!file_exists(fspath) || is_dir(fspath)) {
        const char* idx = "index.html";
        if (file_exists(idx)) {
            size_t len;
            char* data = read_file(idx, &len);
            if (data) {
                send_response(client, 200, "OK",
                              "text/html; charset=utf-8", NULL, data, len);
                free(data);
                return;
            }
        }
        send_error(client, 404, "Not Found", "file not found");
        return;
    }
    size_t len;
    char* data = read_file(fspath, &len);
    if (!data) {
        send_error(client, 500, "Internal Server Error", "cannot read file");
        return;
    }
    send_response(client, 200, "OK", mime_type(fspath), NULL, data, len);
    free(data);
}

/* ??? API HANDLERS ????????????????????????????????????????? */
static void handle_notes_list(socket_t client) {
    size_t len;
    char* json = list_notes_json(&len);
    if (!json) { send_error(client, 500, "Internal Server Error", "oom"); return; }
    send_response(client, 200, "OK",
                  "application/json; charset=utf-8", NULL, json, len);
    free(json);
}

static void handle_note_get(socket_t client, const char* name) {
    char safe[512];
    if (!sanitize_name(name, safe, sizeof(safe))) {
        send_error(client, 400, "Bad Request", "invalid name"); return;
    }
    char path[1024];
    join_path(path, sizeof(path), g_notes_dir, safe);
    if (!file_exists(path)) {
        send_error(client, 404, "Not Found", "note not found"); return;
    }
    size_t len;
    char* data = read_file(path, &len);
    if (!data) {
        send_error(client, 500, "Internal Server Error", "cannot read"); return;
    }
    send_response(client, 200, "OK",
                  "text/plain; charset=utf-8", NULL, data, len);
    free(data);
}

static void handle_note_post(socket_t client, const char* name,
                             const char* body, size_t body_len) {
    char safe[512];
    if (!sanitize_name(name, safe, sizeof(safe))) {
        send_error(client, 400, "Bad Request", "invalid name"); return;
    }
    char path[1024];
    join_path(path, sizeof(path), g_notes_dir, safe);
    if (!write_file(path, body, body_len)) {
        send_error(client, 500, "Internal Server Error", "cannot write"); return;
    }
    char json[256];
    snprintf(json, sizeof(json), "{\"ok\":true,\"file\":\"%s\"}", safe);
    send_json(client, 200, "OK", json);
}

static void handle_note_delete(socket_t client, const char* name) {
    char safe[512];
    if (!sanitize_name(name, safe, sizeof(safe))) {
        send_error(client, 400, "Bad Request", "invalid name"); return;
    }
    char path[1024];
    join_path(path, sizeof(path), g_notes_dir, safe);
    if (!file_exists(path)) {
        send_error(client, 404, "Not Found", "note not found"); return;
    }
    if (!delete_file(path)) {
        send_error(client, 500, "Internal Server Error", "cannot delete"); return;
    }
    send_json(client, 200, "OK", "{\"ok\":true}");
}

static void handle_blocklist_get(socket_t client) {
    size_t len;
    char* json = blocklist_as_json(&len);
    if (!json) { send_error(client, 500, "Internal Server Error", "oom"); return; }
    send_response(client, 200, "OK",
                  "application/json; charset=utf-8", NULL, json, len);
    free(json);
}

static void handle_blocklist_post(socket_t client, const char* body, size_t body_len) {
    /* 1. Always save the raw list first (no admin needed) */
    if (!write_file(g_blocklist_path, body, body_len)) {
        send_error(client, 500, "Internal Server Error", "cannot write blocklist");
        return;
    }

    /* 2. Try to apply to hosts file */
    int in_sync = 0;
    int elevated = is_elevated();
    int spawned = 0;

    if (elevated) {
        in_sync = hosts_write_blocklist();
    } else {
        spawned = spawn_elevated_hosts_writer();
        if (spawned) SLEEP_MS(300);
        in_sync = hosts_is_in_sync();
    }

    /* 3. Report back */
    char json[256];
    snprintf(json, sizeof(json),
             "{\"ok\":true,\"in_sync\":%s,\"admin\":%s,\"spawned\":%s}",
             in_sync ? "true" : "false",
             elevated ? "true" : "false",
             spawned ? "true" : "false");
    send_json(client, 200, "OK", json);
}

static void handle_blocklist_status(socket_t client) {
    int in_sync = hosts_is_in_sync();
    int elevated = is_elevated();
    static char domains[512][256];
    int count = blocklist_read_domains(domains, 512);

    char json[256];
    snprintf(json, sizeof(json),
             "{\"in_sync\":%s,\"admin\":%s,\"count\":%d}",
             in_sync ? "true" : "false",
             elevated ? "true" : "false",
             count);
    send_json(client, 200, "OK", json);
}

static void handle_blocklog(socket_t client) {
    send_json(client, 200, "OK", "{\"lines\":[]}");
}

/* ??? TASKS ENDPOINTS ?????????????????????????????????????? */
static void handle_tasks_get(socket_t client) {
    if (!file_exists(TASKS_FILE)) {
        send_response(client, 200, "OK",
                      "text/plain; charset=utf-8", NULL, "", 0);
        return;
    }
    size_t len;
    char* data = read_file(TASKS_FILE, &len);
    if (!data) {
        send_error(client, 500, "Internal Server Error", "cannot read tasks");
        return;
    }
    send_response(client, 200, "OK",
                  "text/plain; charset=utf-8", NULL, data, len);
    free(data);
}

static void handle_tasks_post(socket_t client, const char* body, size_t body_len) {
    if (!write_file(TASKS_FILE, body, body_len)) {
        send_error(client, 500, "Internal Server Error", "cannot write tasks");
        return;
    }
    send_json(client, 200, "OK", "{\"ok\":true}");
}

static void handle_tasks_delete(socket_t client) {
    if (file_exists(TASKS_FILE)) {
        if (!delete_file(TASKS_FILE)) {
            send_error(client, 500, "Internal Server Error", "cannot delete");
            return;
        }
    }
    send_json(client, 200, "OK", "{\"ok\":true}");
}

/* ??? USER SOUNDS ?????????????????????????????????????????? */

static int is_audio_file(const char* name) {
    const char* dot = strrchr(name, '.');
    if (!dot) return 0;
    dot++;
    return str_ieq(dot, "ogg")  ||
           str_ieq(dot, "mp3")  ||
           str_ieq(dot, "wav")  ||
           str_ieq(dot, "m4a")  ||
           str_ieq(dot, "flac") ||
           str_ieq(dot, "aac")  ||
           str_ieq(dot, "opus") ||
           str_ieq(dot, "webm");
}

static void collect_audio_files(const char* base_rel,
                                const char* dir_rel,
                                char* buf, size_t cap, size_t* len,
                                int* first) {
    /* Filesystem path to open */
    char fs_dir[1024];
    snprintf(fs_dir, sizeof(fs_dir), "%s", base_rel);
    if (dir_rel[0]) {
        size_t fl = strlen(fs_dir);
        snprintf(fs_dir + fl, sizeof(fs_dir) - fl, "%c%s", PATH_SEP, dir_rel);
    }
    for (char* p = fs_dir; *p; p++) {
        if (*p == '/') *p = PATH_SEP;
    }

    DIR* d = opendir(fs_dir);
    if (!d) return;

    struct dirent* ent;
    while ((ent = readdir(d)) != NULL) {
        const char* name = ent->d_name;
        if (!strcmp(name, ".") || !strcmp(name, "..")) continue;

        /* Relative path (URL form, forward slashes) */
        char child_rel[1024];
        if (dir_rel[0]) {
            snprintf(child_rel, sizeof(child_rel), "%s/%s", dir_rel, name);
        } else {
            snprintf(child_rel, sizeof(child_rel), "%s", name);
        }

        /* Full filesystem path for stat/is_dir */
        char child_full[1024];
        snprintf(child_full, sizeof(child_full), "%s%c%s",
                 base_rel, PATH_SEP, child_rel);
        for (char* p = child_full; *p; p++) {
            if (*p == '/') *p = PATH_SEP;
        }

        if (is_dir(child_full)) {
            collect_audio_files(base_rel, child_rel, buf, cap, len, first);
        } else if (is_audio_file(name)) {
            char display[512];
            snprintf(display, sizeof(display), "%s", child_rel);
            char* dot = strrchr(display, '.');
            if (dot) *dot = 0;

            struct stat st;
            long size = 0;
            if (stat(child_full, &st) == 0) size = (long)st.st_size;

            char url_path[1024];
            snprintf(url_path, sizeof(url_path), "%s/%s",
                     USER_SOUNDS_DIR, child_rel);

            /* Skip files with JSON-breaking characters */
            if (strchr(display, '"') || strchr(display, '\\') ||
                strchr(url_path, '"') || strchr(url_path, '\\')) {
                continue;
            }

            if (*len + strlen(display) + strlen(url_path) + 128 >= cap) {
                closedir(d);
                return;
            }

            safe_append(buf, cap, len,
                        "%s{\"name\":\"%s\",\"path\":\"%s\",\"size\":%ld}",
                        *first ? "" : ",",
                        display, url_path, size);
            *first = 0;
        }
    }
    closedir(d);
}

static void handle_custom_sounds(socket_t client) {
    size_t cap = 8192, len = 0;
    char* buf = (char*)malloc(cap);
    if (!buf) {
        send_error(client, 500, "Internal Server Error", "oom");
        return;
    }

    safe_append(buf, cap, &len, "{\"files\":[");

    /* Make sure the folders exist */
    if (!is_dir(SOUNDS_DIR)) make_dir(SOUNDS_DIR);
    if (!is_dir(USER_SOUNDS_DIR)) {
        char path[512];
        snprintf(path, sizeof(path), "sounds%cuser", PATH_SEP);
        make_dir(path);
    }

    int first = 1;
    collect_audio_files(USER_SOUNDS_DIR, "", buf, cap, &len, &first);

    safe_append(buf, cap, &len, "]}");

    send_response(client, 200, "OK",
                  "application/json; charset=utf-8", NULL, buf, len);
    free(buf);
}

static void handle_reveal_sounds(socket_t client) {
    /* Make sure the folder exists */
    if (!is_dir(SOUNDS_DIR)) make_dir(SOUNDS_DIR);
    if (!is_dir(USER_SOUNDS_DIR)) {
        char path[512];
        snprintf(path, sizeof(path), "sounds%cuser", PATH_SEP);
        make_dir(path);
    }

    char abs_path[1024];
#ifdef _WIN32
    if (!_fullpath(abs_path, USER_SOUNDS_DIR, sizeof(abs_path))) {
        strncpy(abs_path, USER_SOUNDS_DIR, sizeof(abs_path) - 1);
        abs_path[sizeof(abs_path) - 1] = 0;
    }
    for (char* p = abs_path; *p; p++) if (*p == '/') *p = '\\';
    ShellExecuteA(NULL, "open", "explorer.exe", abs_path, NULL, SW_SHOWNORMAL);
#elif __APPLE__
    if (realpath(USER_SOUNDS_DIR, abs_path) == NULL) {
        strncpy(abs_path, USER_SOUNDS_DIR, sizeof(abs_path) - 1);
        abs_path[sizeof(abs_path) - 1] = 0;
    }
    char cmd[1200];
    snprintf(cmd, sizeof(cmd), "open '%s' >/dev/null 2>&1 &", abs_path);
    system(cmd);
#else
    if (realpath(USER_SOUNDS_DIR, abs_path) == NULL) {
        strncpy(abs_path, USER_SOUNDS_DIR, sizeof(abs_path) - 1);
        abs_path[sizeof(abs_path) - 1] = 0;
    }
    char cmd[1200];
    snprintf(cmd, sizeof(cmd), "xdg-open '%s' >/dev/null 2>&1 &", abs_path);
    system(cmd);
#endif

    log_line("Revealed: %s", abs_path);
    send_json(client, 200, "OK", "{\"ok\":true}");
}

/* ??? REQUEST PARSING ?????????????????????????????????????? */
static int parse_request(const char* buf, size_t buf_len,
                         char* method, size_t method_sz,
                         char* path, size_t path_sz,
                         size_t* content_length,
                         const char** body_start) {
    size_t i = 0;
    while (i < buf_len && buf[i] != ' ' && i + 1 < method_sz) {
        method[i] = buf[i]; i++;
    }
    method[i] = 0;
    if (i >= buf_len || buf[i] != ' ') return 0;
    i++;
    size_t p = 0;
    while (i < buf_len && buf[i] != ' ' && p + 1 < path_sz) path[p++] = buf[i++];
    path[p] = 0;
    if (i >= buf_len || buf[i] != ' ') return 0;
    const char* hdr_end = NULL;
    for (size_t k = i; k + 3 < buf_len; k++) {
        if (buf[k] == '\r' && buf[k+1] == '\n' &&
            buf[k+2] == '\r' && buf[k+3] == '\n') { hdr_end = buf + k + 4; break; }
        if (buf[k] == '\n' && buf[k+1] == '\n') { hdr_end = buf + k + 2; break; }
    }
    if (!hdr_end) return 0;
    *content_length = 0;
    const char* cl = strcasestr_local(buf, "Content-Length:");
    if (cl && cl < hdr_end) {
        cl += 15;
        while (*cl == ' ') cl++;
        *content_length = (size_t)strtoul(cl, NULL, 10);
    }
    *body_start = hdr_end;
    return 1;
}

/* ??? REQUEST DISPATCH ????????????????????????????????????? */
static void handle_client(socket_t client) {
    char* buf = (char*)malloc(MAX_REQ_LEN + MAX_BODY_LEN + 1);
    if (!buf) { CLOSE_SOCKET(client); return; }

    size_t total = 0;
    while (total < (size_t)(MAX_REQ_LEN + MAX_BODY_LEN)) {
        int n = recv(client, buf + total,
                     (int)(MAX_REQ_LEN + MAX_BODY_LEN - total), 0);
        if (n <= 0) break;
        total += n;
        buf[total] = 0;
        const char* hdr_end = strstr(buf, "\r\n\r\n");
        size_t hdr_len = hdr_end ? (size_t)(hdr_end - buf) + 4 : 0;
        if (!hdr_end) {
            const char* h2 = strstr(buf, "\n\n");
            if (h2) hdr_len = (size_t)(h2 - buf) + 2;
        }
        if (hdr_len > 0) {
            const char* cl = strcasestr_local(buf, "Content-Length:");
            size_t content_len = 0;
            if (cl && cl < buf + hdr_len) {
                cl += 15;
                while (*cl == ' ') cl++;
                content_len = (size_t)strtoul(cl, NULL, 10);
            }
            if (total >= hdr_len + content_len) break;
        }
    }

    if (total == 0) { free(buf); CLOSE_SOCKET(client); return; }

    char method[16], raw_path[1024];
    size_t content_length = 0;
    const char* body_start = NULL;
    if (!parse_request(buf, total, method, sizeof(method),
                       raw_path, sizeof(raw_path),
                       &content_length, &body_start)) {
        send_error(client, 400, "Bad Request", "malformed request");
        free(buf); CLOSE_SOCKET(client); return;
    }

    char path[1024];
    strip_query(raw_path, path, sizeof(path));
    log_line("%s %s", method, path);

    if (!strcmp(method, "OPTIONS")) {
        send_response(client, 204, "No Content", "text/plain", NULL, NULL, 0);
        free(buf); CLOSE_SOCKET(client); return;
    }

    if (!strncmp(path, "/api/notes", 10)) {
        const char* rest = path + 10;
        if (*rest == 0 || !strcmp(rest, "/")) {
            if (!strcmp(method, "GET")) handle_notes_list(client);
            else send_error(client, 405, "Method Not Allowed", "only GET");
        } else if (*rest == '/') {
            const char* name = rest + 1;
            if (!strcmp(method, "GET")) handle_note_get(client, name);
            else if (!strcmp(method, "POST")) {
                size_t body_len = total - (size_t)(body_start - buf);
                if (body_len > content_length) body_len = content_length;
                handle_note_post(client, name, body_start, body_len);
            } else if (!strcmp(method, "DELETE")) handle_note_delete(client, name);
            else send_error(client, 405, "Method Not Allowed", "unsupported");
        } else {
            send_error(client, 404, "Not Found", "unknown api route");
        }
    }
    else if (!strcmp(path, "/api/blocklist")) {
        if (!strcmp(method, "GET")) handle_blocklist_get(client);
        else if (!strcmp(method, "POST")) {
            size_t body_len = total - (size_t)(body_start - buf);
            if (body_len > content_length) body_len = content_length;
            handle_blocklist_post(client, body_start, body_len);
        } else send_error(client, 405, "Method Not Allowed", "unsupported");
    }
    else if (!strcmp(path, "/api/blocklist/status")) {
        handle_blocklist_status(client);
    }
    else if (!strcmp(path, "/api/proxy/stats")) {
        handle_blocklist_status(client);
    }
    else if (!strcmp(path, "/api/blocklog")) {
        handle_blocklog(client);
    }
    else if (!strcmp(path, "/api/sounds/custom")) {
        handle_custom_sounds(client);
    }
    else if (!strcmp(path, "/api/sounds/reveal") && !strcmp(method, "POST")) {
        handle_reveal_sounds(client);
    }
    else if (!strcmp(path, "/api/tasks")) {
        if (!strcmp(method, "GET")) handle_tasks_get(client);
        else if (!strcmp(method, "POST")) {
            size_t body_len = total - (size_t)(body_start - buf);
            if (body_len > content_length) body_len = content_length;
            handle_tasks_post(client, body_start, body_len);
        }
        else if (!strcmp(method, "DELETE")) handle_tasks_delete(client);
        else send_error(client, 405, "Method Not Allowed", "unsupported");
    }
    else if (!strcmp(path, "/api/shutdown") && !strcmp(method, "POST")) {
        send_json(client, 200, "OK", "{\"ok\":true,\"bye\":true}");
        g_running = 0;
    }
    else if (!strcmp(method, "GET") || !strcmp(method, "HEAD")) {
        serve_static(client, path);
    } else {
        send_error(client, 405, "Method Not Allowed", "unsupported");
    }

    free(buf);
    CLOSE_SOCKET(client);
}

/* ??? BROWSER ?????????????????????????????????????????????? */
static void open_browser(const char* url) {
#ifdef _WIN32
    ShellExecuteA(NULL, "open", url, NULL, NULL, SW_SHOWNORMAL);
#elif __APPLE__
    char cmd[512];
    snprintf(cmd, sizeof(cmd), "open '%s' >/dev/null 2>&1 &", url);
    system(cmd);
#else
    char cmd[512];
    snprintf(cmd, sizeof(cmd), "xdg-open '%s' >/dev/null 2>&1 &", url);
    system(cmd);
#endif
}

static int is_self_running(int port) {
    socket_t s = socket(AF_INET, SOCK_STREAM, 0);
    if (s == INVALID_SOCKET) return 0;
    struct sockaddr_in a;
    memset(&a, 0, sizeof(a));
    a.sin_family = AF_INET;
    a.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
    a.sin_port = htons((unsigned short)port);
    int ok = (connect(s, (struct sockaddr*)&a, sizeof(a)) == 0);
    CLOSE_SOCKET(s);
    return ok;
}

/* ??? ELEVATED HELPER MODE ????????????????????????????????? */
static int run_apply_hosts_mode(void) {
    log_init();
    log_line("=== Elevated hosts writer started ===");
    int ok = hosts_write_blocklist();
    log_line("Elevated hosts write %s", ok ? "succeeded" : "failed");
    log_close();
    return ok ? 0 : 1;
}

/* ??? MAIN ????????????????????????????????????????????????? */
int main(int argc, char** argv) {
    /* Check for --apply-hosts mode (elevated hosts writer) */
    for (int i = 1; i < argc; i++) {
        if (!strcmp(argv[i], "--apply-hosts")) {
#ifdef _WIN32
            WSADATA wsa;
            WSAStartup(MAKEWORD(2, 2), &wsa);
#endif
            snprintf(g_blocklist_path, sizeof(g_blocklist_path), "%s", BLOCKLIST_FILE);
            int rc = run_apply_hosts_mode();
#ifdef _WIN32
            WSACleanup();
#endif
            return rc;
        }
    }

    /* Browser opening is OFF by default.
       Pass --open-browser to enable it. */
    int open_browser_flag = 0;
    for (int i = 1; i < argc; i++) {
        if (!strcmp(argv[i], "--open-browser")) {
            open_browser_flag = 1;
        }
    }

    int port = DEFAULT_PORT;
    if (argc > 1) {
        int p = atoi(argv[1]);
        if (p > 0 && p < 65536) port = p;
    }

#ifdef _WIN32
    WSADATA wsa;
    if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0) return 1;
    HWND console = GetConsoleWindow();
    if (console) ShowWindow(console, SW_HIDE);
#else
    signal(SIGPIPE, SIG_IGN);
#endif

    log_init();
    log_line("Starting on port %d", port);
    log_line("Elevation: %s", is_elevated() ? "yes" : "no");
    log_line("Browser launch: %s", open_browser_flag ? "yes" : "no");

    if (is_self_running(port)) {
        log_line("Another instance already running on port %d", port);
        if (open_browser_flag) {
            char url[64];
            snprintf(url, sizeof(url), "http://localhost:%d", port);
            open_browser(url);
        }
        log_close();
#ifdef _WIN32
        WSACleanup();
#endif
        return 0;
    }

    if (!is_dir(g_notes_dir)) {
        if (!make_dir(g_notes_dir)) log_line("Warning: cannot create '%s'", g_notes_dir);
    }

    /* Create sounds and sounds/user folders */
    if (!is_dir(SOUNDS_DIR)) make_dir(SOUNDS_DIR);
    if (!is_dir(USER_SOUNDS_DIR)) {
        char user_path[512];
        snprintf(user_path, sizeof(user_path), "sounds%cuser", PATH_SEP);
        if (make_dir(user_path)) {
            log_line("Created %s", user_path);
        } else {
            log_line("Warning: cannot create '%s'", user_path);
        }
    }

    snprintf(g_blocklist_path, sizeof(g_blocklist_path), "%s", BLOCKLIST_FILE);
    if (!file_exists(g_blocklist_path)) {
        const char* stub =
            "# Crocus blocklist\n"
            "# One domain per line. Comments start with #.\n"
            "#\n"
            "# facebook.com\n"
            "# instagram.com\n"
            "# twitter.com\n"
            "# x.com\n"
            "# reddit.com\n"
            "# tiktok.com\n";
        write_file(g_blocklist_path, stub, strlen(stub));
    }

    socket_t server = socket(AF_INET, SOCK_STREAM, 0);
    if (server == INVALID_SOCKET) {
        log_line("socket() failed"); log_close();
#ifdef _WIN32
        WSACleanup();
#endif
        return 1;
    }
    int opt = 1;
    setsockopt(server, SOL_SOCKET, SO_REUSEADDR, (const char*)&opt, sizeof(opt));
    struct sockaddr_in addr;
    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
    addr.sin_port = htons((unsigned short)port);
    if (bind(server, (struct sockaddr*)&addr, sizeof(addr)) != 0) {
        log_line("bind() failed on port %d", port);
        CLOSE_SOCKET(server); log_close();
#ifdef _WIN32
        WSACleanup();
#endif
        return 1;
    }
    if (listen(server, 16) != 0) {
        log_line("listen() failed");
        CLOSE_SOCKET(server); log_close();
#ifdef _WIN32
        WSACleanup();
#endif
        return 1;
    }

    log_line("Listening on http://localhost:%d", port);

    /* Browser opening is opt-in via --open-browser */
    if (open_browser_flag) {
        SLEEP_MS(300);
        char url[64];
        snprintf(url, sizeof(url), "http://localhost:%d", port);
        open_browser(url);
    } else {
        log_line("Browser launch disabled (default)");
    }

    while (g_running) {
        struct sockaddr_in client_addr;
        socklen_t clen = sizeof(client_addr);
        socket_t client = accept(server, (struct sockaddr*)&client_addr, &clen);
        if (client == INVALID_SOCKET) {
            if (!g_running) break;
            SLEEP_MS(10);
            continue;
        }
        handle_client(client);
    }

    CLOSE_SOCKET(server);
    log_close();

#ifdef _WIN32
    WSACleanup();
#endif
    return 0;
}