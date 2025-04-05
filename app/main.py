import os
import json
from fastapi import FastAPI
from dotenv import load_dotenv, find_dotenv
import google.generativeai as genai
import uvicorn


# Załadowanie klucza API i połączenie z Gemini
load_dotenv(find_dotenv())
genai.configure(api_key=os.environ.get("GOOGLE_AI_API_KEY"))
model = genai.GenerativeModel("gemini-2.0-flash")

app = FastAPI()

# Szablon prompta
prompt_template = """Zaplanuj mi wycieczkę po {country} na {date} dni w formacie JSON takim jak poniżej. Każdy dzień powinien zawierać 2–4 aktywności. Uwzględnij lokalne atrakcje, kulturę, jedzenie i ciekawe doświadczenia. Użyj następującej struktury:
{{
  dzień: "dzień 1",
  aktywnosci: [
    {{
      nazwa_aktywnosci: "nazwa aktywności",
      opis_aktywnosci: "co się będzie robiło w ramach tej aktywności",
      kiedy: "przedział czasowy, np. 10:00–12:00"
    }},
    ...
  ]
}}
Zrób taką strukturę dla każdego dnia osobno, najlepiej w tablicy JSON. Nie dodawaj tekstu spoza formatu JSON."""



# Funkcja generowania odpowiedzi
def generate_response(prompt, country, date):
  """
  Funkcja generuje odpowiedź wykorzystując model językowy Google Generative AI. Formatuje podany szablon
  oraz przesyła go do modelu generatywnego w celu uzyskania odpowiedzi.
  :param prompt: Szablon tekstowy zawierający zmienne do uzupełnienia, np. "{country}" i "{date}".
  :param country: Nazwa kraju, który będzie wstawiony w odpowiednim miejscu szablonu.
  :param date: Okres czasu, który również zostanie wstawiony w odpowiednie miejsce szablonu.
  :return: Tekst odpowiedzi wygenerowany przez model językowy.
  """
  filled_prompt = prompt.format(country=country, date=date, prompt=prompt)
  response = model.generate_content(filled_prompt)
  return response.text.replace("```","").replace("json","").strip()


# Endpoint API
@app.get("/get_plan")
async def get_plan(duration: str, target_place: str):
    """
    Endpoint przyjmujący parametry:
    - duration: liczba dni wycieczki
    - target_place: miejsce docelowe podróży

    Zwraca plan podróży w formacie JSON.
    """
    return json.loads(generate_response(prompt_template, target_place, duration))


if __name__ == "__main__":
   uvicorn.run(app, host="0.0.0.0", port=8000)

