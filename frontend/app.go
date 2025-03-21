package main

import (
	"context"
	"fmt"
	"time"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Call LLM api
func (a *App) CallLLM(destination, duration string) string {
	time.Sleep(time.Millisecond * 5000)
	return fmt.Sprintf("Mom I'm going to %s for %s!", destination, duration)
}
