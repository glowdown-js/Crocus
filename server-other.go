//go:build !windows

package main

import (
	"os/exec"
	"syscall"
)

func setHideWindow(cmd *exec.Cmd)     {}
func attachToJobObject(cmd *exec.Cmd) {}

func killProcessTree(cmd *exec.Cmd) {
	if cmd == nil || cmd.Process == nil {
		return
	}
	_ = syscall.Kill(-cmd.Process.Pid, syscall.SIGKILL)
}