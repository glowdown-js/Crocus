//go:build windows

package main

import (
	"os/exec"
	"syscall"
	"unsafe"
)

var (
	kernel32            = syscall.NewLazyDLL("kernel32.dll")
	procCreateJobObject = kernel32.NewProc("CreateJobObjectW")
	procAssignProcess   = kernel32.NewProc("AssignProcessToJobObject")
	procSetJobInfo      = kernel32.NewProc("SetInformationJobObject")
)

type jobObjectBasicLimitInformation struct {
	PerProcessUserTimeLimit int64
	PerJobUserTimeLimit     int64
	LimitFlags              uint32
	MinimumWorkingSetSize   uintptr
	MaximumWorkingSetSize   uintptr
	ActiveProcessLimit      uint32
	Affinity                uintptr
	PriorityClass           uint32
	SchedulingClass         uint32
}

type ioCounters struct {
	ReadOperationCount  uint64
	WriteOperationCount uint64
	OtherOperationCount uint64
	ReadTransferCount   uint64
	WriteTransferCount  uint64
	OtherTransferCount  uint64
}

type jobObjectExtendedLimitInformation struct {
	BasicLimitInformation jobObjectBasicLimitInformation
	IoInfo                ioCounters
	ProcessMemoryLimit    uintptr
	JobMemoryLimit        uintptr
	PeakProcessMemoryUsed uintptr
	PeakJobMemoryUsed     uintptr
}

const (
	jobObjectExtendedLimitInformationClass = 9
	jobObjectLimitKillOnJobClose           = 0x2000
)

// attachToJobObject ties the child process to a job that dies when we do.
// Even if this Go process is force-killed, Windows tears down the child.
func attachToJobObject(cmd *exec.Cmd) {
	if cmd == nil || cmd.Process == nil {
		return
	}
	job, _, _ := procCreateJobObject.Call(0, 0)
	if job == 0 {
		return
	}
	var info jobObjectExtendedLimitInformation
	info.BasicLimitInformation.LimitFlags = jobObjectLimitKillOnJobClose
	procSetJobInfo.Call(job, jobObjectExtendedLimitInformationClass,
		uintptr(unsafe.Pointer(&info)), unsafe.Sizeof(info))

	hProc, err := syscall.OpenProcess(0x0200|0x0400, false, uint32(cmd.Process.Pid))
	if err == nil {
		procAssignProcess.Call(job, uintptr(hProc))
		syscall.CloseHandle(hProc)
	}
}

// setHideWindow ensures no console pops up for the child
func setHideWindow(cmd *exec.Cmd) {
	cmd.SysProcAttr = &syscall.SysProcAttr{
		HideWindow:    true,
		CreationFlags: 0x08000000, // CREATE_NO_WINDOW
	}
}

// killProcessTree kills the process and any children it spawned
func killProcessTree(cmd *exec.Cmd) {
	if cmd == nil || cmd.Process == nil {
		return
	}
	kill := exec.Command("taskkill", "/F", "/T", "/PID", itoa(cmd.Process.Pid))
	_ = kill.Run()
}

func itoa(i int) string {
	if i == 0 {
		return "0"
	}
	neg := i < 0
	if neg {
		i = -i
	}
	var buf [20]byte
	pos := len(buf)
	for i > 0 {
		pos--
		buf[pos] = byte('0' + i%10)
		i /= 10
	}
	if neg {
		pos--
		buf[pos] = '-'
	}
	return string(buf[pos:])
}