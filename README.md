# How to odpalic UI
## Dependencje
Zeby odpalic UI potrzeba:

1) Go

2) Go Wails 

3) node.js

## Instalowanie dependencji
1) zeby zainstalowac GoLang trzeba przeleciec instrukcje z tej stronki `https://go.dev/doc/install`

2) zeby pobrac Wails wystarczy odpalic ```go install github.com/wailsapp/wails/v2/cmd/wails@latest```, a potem sprawdzic, czy installacja sie udala przez odpalenie ```wails version```, jesli Wails nie jest wykryte mozliwe, ze katalog go/bin nie zostal dodany do zmiennej srodowiskowej PATH

3) zeby pobrac node.js trzeba przeleciec instrukcje z tej stronki `https://nodejs.org/en/download`

## Odpalanie samej apki
1) zmieniamy katalog na `frontend/`

2) wpisujemy ```wails dev```

3) powinno dzialac ;)
