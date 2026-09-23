package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"runtime"
	"strings"
	"syscall"
	"time"

	"github.com/zserge/lorca"
)

//go:embed all:app
var embeddedFiles embed.FS

const serverURL = "http://127.0.0.1:8000"
const appVersion = "0.5.6"

// ─────────────────────────────────────────────────────────
// Splash HTML — shown the instant the window opens.
// The window NEVER shows anything else until the app is ready.
// ─────────────────────────────────────────────────────────
const splashHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Crocus</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    height: 100%;
    background: #0b1210;
    color: #e9f3ec;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    user-select: none;
    overflow: hidden;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    animation: fadeIn .5s ease;
    max-width: 520px;
    text-align: center;
    padding: 24px;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .logo {
    width: 72px;
    height: 72px;
    color: #ff7a4d;
    animation: spin 6s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .wordmark {
    font: italic 700 34px Georgia, "Times New Roman", serif;
    letter-spacing: .01em;
  }
  .wordmark b { color: #ff7a4d; }
  .status {
    font: 700 11px system-ui, sans-serif;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #8fa79b;
    min-height: 14px;
  }
  .bar {
    width: 220px;
    height: 3px;
    background: #17241f;
    border-radius: 3px;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #ff7a4d, #f7c948);
    border-radius: 3px;
    transition: width .4s ease;
  }
  .dots::after {
    content: '';
    animation: dots 1.4s steps(4, end) infinite;
  }
  @keyframes dots {
    0%   { content: ''; }
    25%  { content: '.'; }
    50%  { content: '..'; }
    75%  { content: '...'; }
    100% { content: ''; }
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  /* Error state */
  .error-card {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    animation: fadeIn .3s ease;
  }
  .error-card.visible { display: flex; }
  .error-icon {
    font-size: 42px;
    color: #ff7a4d;
  }
  .error-title {
    font: 700 18px system-ui, sans-serif;
    color: #e9f3ec;
  }
  .error-detail {
    font: 400 13px ui-monospace, Menlo, Consolas, monospace;
    color: #8fa79b;
    background: #17241f;
    border: 1px solid rgba(163,190,176,.15);
    border-radius: 8px;
    padding: 10px 14px;
    max-width: 420px;
    word-break: break-word;
    white-space: pre-wrap;
    text-align: left;
  }
  .error-hint {
    font: 400 13px system-ui, sans-serif;
    color: #8fa79b;
    line-height: 1.5;
    max-width: 420px;
  }
  .error-actions {
    display: flex;
    gap: 10px;
    margin-top: 8px;
  }
  .error-actions button {
    background: #ff7a4d;
    color: #0a130e;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font: 700 13px system-ui, sans-serif;
    cursor: pointer;
    transition: filter .2s;
  }
  .error-actions button.ghost {
    background: transparent;
    color: #8fa79b;
    border: 1px solid rgba(163,190,176,.25);
  }
  .error-actions button:hover { filter: brightness(1.1); }

  .hidden { display: none !important; }
</style>
</head>
<body>
  <div class="wrap">

    <!-- Loading state -->
    <div class="loading" id="loading">
      <svg class="logo" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="6.5" rx="3" ry="5.5"/>
        <ellipse cx="12" cy="6.5" rx="3" ry="5.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="6.5" rx="3" ry="5.5" transform="rotate(120 12 12)"/>
        <ellipse cx="12" cy="6.5" rx="3" ry="5.5" transform="rotate(180 12 12)"/>
        <ellipse cx="12" cy="6.5" rx="3" ry="5.5" transform="rotate(240 12 12)"/>
        <ellipse cx="12" cy="6.5" rx="3" ry="5.5" transform="rotate(300 12 12)"/>
        <circle cx="12" cy="12" r="2.4" fill="#f7c948"/>
      </svg>
      <div class="wordmark">Cro<b>cus</b></div>
      <div class="status" id="status">Loading<span class="dots"></span></div>
      <div class="bar"><div class="bar-fill" id="fill"></div></div>
    </div>

    <!-- Error state -->
    <div class="error-card" id="errorCard">
      <div class="error-icon">⚠</div>
      <div class="error-title" id="errorTitle">Something went wrong</div>
      <div class="error-detail hidden" id="errorDetail"></div>
      <div class="error-hint" id="errorHint"></div>
      <div class="error-actions">
        <button onclick="retrySetup()">Try again</button>
        <button class="ghost" onclick="window.close()">Close</button>
      </div>
    </div>

  </div>

  <script>
    function setStatus(text, percent) {
      var el = document.getElementById('status');
      var bar = document.getElementById('fill');
      if (el) el.innerHTML = text + '<span class="dots"></span>';
      if (bar) bar.style.width = percent + '%';
    }
    function showError(title, detail, hint) {
      document.getElementById('loading').style.display = 'none';
      var card = document.getElementById('errorCard');
      card.classList.add('visible');
      document.getElementById('errorTitle').textContent = title;
      if (detail) {
        var d = document.getElementById('errorDetail');
        d.textContent = detail;
        d.classList.remove('hidden');
      }
      if (hint) {
        document.getElementById('errorHint').textContent = hint;
      }
    }
    function resetSplash() {
      document.getElementById('loading').style.display = 'flex';
      document.getElementById('errorCard').classList.remove('visible');
      var d = document.getElementById('errorDetail');
      if (d) d.classList.add('hidden');
      setStatus('Retrying', 0);
    }
  </script>
</body>
</html>`

// ─────────────────────────────────────────────────────────
func main() {
	log.SetFlags(log.Ltime)

	// Create the Chrome profile directory so Lorca has somewhere to store state
	profileDir := filepath.Join(os.Getenv("LOCALAPPDATA"), "Crocus", "chrome-profile")
	_ = os.MkdirAll(profileDir, 0755)

	// Build the splash as a data URL
	splashURL := "data:text/html;charset=utf-8," + urlEncode(splashHTML)

	// Open Lorca IMMEDIATELY with the splash
	ui, err := lorca.New(
		splashURL,
		profileDir,
		1000,
		700,
		"--remote-allow-origins=*",
		"--disable-infobars",
		"--no-first-run",
		"--no-default-browser-check",
		"--disable-features=TranslateUI,ChromeWhatsNewUI",
		"--disable-session-crashed-bubble",
		"--hide-crash-restore-bubble",
		"--disable-background-networking",
		"--disable-sync",
		"--disable-extensions",
	)
	if err != nil {
		log.Fatal("lorca failed: ", err)
	}
	defer ui.Close()

	log.Println("[main] splash window open")

	// Bind the retry button so it re-runs the entire setup
	ui.Bind("retrySetup", func() {
		go func() {
			ui.Eval(`resetSplash()`)
			doSetup(ui)
		}()
	})

	// Run setup in the background
	type setupResult struct {
		serverCmd *exec.Cmd
		err       error
	}
	setupCh := make(chan setupResult, 1)

	go func() {
		serverCmd, err := doSetup(ui)
		setupCh <- setupResult{serverCmd: serverCmd, err: err}
	}()

	// Catch Ctrl+C / SIGTERM so we always clean up
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-sigCh
		log.Println("[main] signal received")
		os.Exit(0)
	}()

	// Block until the user closes the window
	<-ui.Done()
	log.Println("[main] window closed")

	// Wait for setup to finish if it's still running, then clean up
	result := <-setupCh
	if result.serverCmd != nil {
		cleanup(result.serverCmd)
	}
}

// ─────────────────────────────────────────────────────────
// doSetup runs every step in order. The window navigates to
// the app ONLY if every step succeeds. Otherwise the splash
// stays visible and shows the error.
// ─────────────────────────────────────────────────────────
func doSetup(ui lorca.UI) (*exec.Cmd, error) {
	var serverCmd *exec.Cmd
	var err error

	// ══════════ STEP 1: EXTRACT EMBEDDED FILES ══════════
	ui.Eval(`setStatus('Extracting files', 15)`)
	log.Println("[setup] step 1: extract")
	appDir, err := extractApp()
	if err != nil {
		log.Println("[setup] FAILED at step 1:", err)
		showError(ui, "Could not extract app files", err)
		return nil, err
	}
	log.Println("[setup] step 1 done, app dir:", appDir)

	// ══════════ STEP 2: START THE SERVER ══════════
	ui.Eval(`setStatus('Starting server', 40)`)
	log.Println("[setup] step 2: start server")
	serverCmd, err = startServer(appDir)
	if err != nil {
		log.Println("[setup] FAILED at step 2:", err)
		showError(ui, "Could not start the server", err)
		return nil, err
	}
	log.Println("[setup] step 2 done, server pid:", serverCmd.Process.Pid)

	// ══════════ STEP 3: WAIT FOR THE SERVER ══════════
	ui.Eval(`setStatus('Waiting for server', 70)`)
	log.Println("[setup] step 3: wait for server")
	if !waitForServer(200) {
		err = fmt.Errorf("server did not respond on port 8000 within 8 seconds")
		log.Println("[setup] FAILED at step 3:", err)
		showError(ui, "The server did not start", err)
		return serverCmd, err
	}
	log.Println("[setup] step 3 done, server answering")

	// ══════════ STEP 4: VERIFY THE APP LOADS ══════════
	ui.Eval(`setStatus('Verifying app', 90)`)
	log.Println("[setup] step 4: verify app")
	if !verifyApp() {
		err = fmt.Errorf("server is answering but the app did not return HTML")
		log.Println("[setup] FAILED at step 4:", err)
		showError(ui, "The server is running but the app did not load", err)
		return serverCmd, err
	}
	log.Println("[setup] step 4 done, app is serving")

	// ══════════ ALL STEPS PASSED ══════════
	ui.Eval(`setStatus('Ready', 100)`)

	// Give the user a moment to see the completed bar
	time.Sleep(400 * time.Millisecond)

	log.Println("[setup] navigating to app at", serverURL)
	ui.Load(serverURL)

	return serverCmd, nil
}

// ─────────────────────────────────────────────────────────
// showError draws the error card inside the splash
// ─────────────────────────────────────────────────────────
func showError(ui lorca.UI, title string, err error) {
	detail := ""
	if err != nil {
		detail = err.Error()
	}
	hint := "Check crocus-server.log inside the app folder for details."

	safe := func(s string) string {
		s = strings.ReplaceAll(s, `\`, `\\`)
		s = strings.ReplaceAll(s, `'`, `\'`)
		s = strings.ReplaceAll(s, "\n", `\n`)
		s = strings.ReplaceAll(s, "\r", "")
		return s
	}

	js := fmt.Sprintf(
		`showError('%s', '%s', '%s');`,
		safe(title), safe(detail), safe(hint),
	)
	ui.Eval(js)
	log.Printf("[setup] error shown: %s — %v", title, err)
}

// ─────────────────────────────────────────────────────────
// extractApp unpacks the embedded app/ folder on first run.
// Subsequent runs skip this if the version marker matches.
// ─────────────────────────────────────────────────────────
func extractApp() (string, error) {
	cacheDir, err := os.UserCacheDir()
	if err != nil {
		return "", err
	}
	target := filepath.Join(cacheDir, "Crocus", "app")
	markerPath := filepath.Join(target, ".version")

	// Fast path — already extracted at this version
	if data, err := os.ReadFile(markerPath); err == nil {
		if string(data) == appVersion {
			log.Println("[extract] cached, skipping")
			return target, nil
		}
	}

	log.Println("[extract] extracting app files")

	err = fs.WalkDir(embeddedFiles, "app", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		rel, _ := filepath.Rel("app", path)
		dest := filepath.Join(target, rel)

		if d.IsDir() {
			return os.MkdirAll(dest, 0755)
		}

		// Preserve user data across re-extractions
		lower := filepath.ToSlash(rel)
		isUserData :=
			lower == "tasks.crocustask" ||
				lower == "blocklist.txt" ||
				lower == "crocus-server.log" ||
				(strings.HasPrefix(lower, "notes/"))

		if isUserData {
			if _, statErr := os.Stat(dest); statErr == nil {
				return nil
			}
		}

		data, err := embeddedFiles.ReadFile(path)
		if err != nil {
			return err
		}
		return os.WriteFile(dest, data, 0644)
	})
	if err != nil {
		return "", err
	}

	_ = os.WriteFile(markerPath, []byte(appVersion), 0644)
	return target, nil
}

// ─────────────────────────────────────────────────────────
// startServer launches crocus-server.exe as a child process
// ─────────────────────────────────────────────────────────
func startServer(appDir string) (*exec.Cmd, error) {
	exeName := "crocus-server.exe"
	if runtime.GOOS != "windows" {
		exeName = "crocus-server"
	}
	serverPath := filepath.Join(appDir, exeName)
	if _, err := os.Stat(serverPath); err != nil {
		return nil, fmt.Errorf("server not found at %s: %w", serverPath, err)
	}

	cmd := exec.Command(serverPath, "--no-browser")
	cmd.Dir = appDir
	setHideWindow(cmd)

	logPath := filepath.Join(appDir, "crocus-server.log")
	if logFile, err := os.OpenFile(logPath, os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0644); err == nil {
		cmd.Stdout = logFile
		cmd.Stderr = logFile
	}

	if err := cmd.Start(); err != nil {
		return nil, err
	}
	log.Printf("[server] started %s (pid %d)", exeName, cmd.Process.Pid)

	if runtime.GOOS == "windows" {
		attachToJobObject(cmd)
	}
	return cmd, nil
}

// ─────────────────────────────────────────────────────────
// waitForServer polls until the server answers on /
// ─────────────────────────────────────────────────────────
func waitForServer(maxAttempts int) bool {
	client := &http.Client{Timeout: 300 * time.Millisecond}
	for i := 0; i < maxAttempts; i++ {
		resp, err := client.Get(serverURL + "/")
		if err == nil {
			resp.Body.Close()
			return true
		}
		time.Sleep(100 * time.Millisecond)
	}
	return false
}

// ─────────────────────────────────────────────────────────
// verifyApp confirms the server is serving HTML, not just up
// ─────────────────────────────────────────────────────────
func verifyApp() bool {
	client := &http.Client{Timeout: 2 * time.Second}
	resp, err := client.Get(serverURL + "/")
	if err != nil {
		return false
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		return false
	}

	buf := make([]byte, 512)
	n, _ := resp.Body.Read(buf)
	if n == 0 {
		return false
	}

	body := strings.ToLower(string(buf[:n]))
	return strings.Contains(body, "<!doctype") ||
		strings.Contains(body, "<html")
}

// ─────────────────────────────────────────────────────────
// cleanup kills the server process
// ─────────────────────────────────────────────────────────
func cleanup(serverCmd *exec.Cmd) {
	if serverCmd != nil && serverCmd.Process != nil {
		log.Println("[cleanup] killing server")
		killProcessTree(serverCmd)
	}
}

// ─────────────────────────────────────────────────────────
// urlEncode percent-encodes a string for a data: URL
// ─────────────────────────────────────────────────────────
func urlEncode(s string) string {
	var b strings.Builder
	for i := 0; i < len(s); i++ {
		c := s[i]
		switch {
		case c >= 'a' && c <= 'z',
			c >= 'A' && c <= 'Z',
			c >= '0' && c <= '9',
			c == '-', c == '_', c == '.', c == '~',
			c == '!', c == '$', c == '&', c == '\'',
			c == '(', c == ')', c == '*', c == '+',
			c == ',', c == ';', c == '=', c == ':',
			c == '@', c == '/', c == '?':
			b.WriteByte(c)
		default:
			fmt.Fprintf(&b, "%%%02X", c)
		}
	}
	return b.String()
}