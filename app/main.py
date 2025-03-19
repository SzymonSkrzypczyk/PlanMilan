import os
from dotenv import load_dotenv, find_dotenv
import google.generativeai as genai

# załadowanie klucza i połączenie z gemini api
_ = load_dotenv(find_dotenv())
genai.configure(api_key=os.environ.get("GOOGLE_AI_API_KEY"))
model = genai.GenerativeModel("gemini-2.0-flash")

prompt_template = """Zaplanuj wycieczkę po {country} na {date}.""" # przykład szablonu

# funkcja do generowania odpowiedzi
def generate_response(prompt, country, date):
  filled_prompt = prompt.format(country=country, date=date, prompt=prompt)
  response = model.generate_content(filled_prompt)
  return response.text

print(generate_response(prompt_template, "Wlochy", "7 dni")) # użycie szablonu
