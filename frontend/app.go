package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
)

type Activity struct {
	Name        string `json:"nazwa_aktywnosci"`
	Description string `json:"opis_aktywnosci"`
	TimeSlot    string `json:"kiedy"`
}

type DayPlan struct {
	Day        string     `json:"dzień"`
	Activities []Activity `json:"aktywnosci"`
}

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) CallLLM(target_place, duration string) string {
	baseURL := "http://127.0.0.1:8000/get_plan"
	params := url.Values{}
	params.Add("target_place", target_place)
	params.Add("duration", duration)

	fullURL := fmt.Sprintf("%s?%s", baseURL, params.Encode())
	req, err := http.NewRequest("GET", fullURL, nil)
	if err != nil {
		log.Fatalln("Error creating request:", err)
		return "{}"
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalln("Error making request:", err)
		return "{}"
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Fatalln("Error: Received status", resp.Status)
		return "{}"
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln("Error reading response body:", err)
		return "{}"
	}

	log.Println("Raw JSON Response:", string(body))
	return string(body)
}
