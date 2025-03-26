# Backend a.k.a. LLM generation ;)

## Requirements
In order to run the backend API one needs:
- [python3](https://www.python.org/downloads/)
- [Gemini API Token](https://ai.google.dev/gemini-api/docs/api-key) set to environment variable `GOOGLE_AI_API_KEY`
- python3 packages saved in `../requirements.txt`
- python virtual environment **(not required, but recommended)**

## Installing packages 
The packages can be installed either directly or using the `requirements.txt` file:
1) directly(for each package) 
    ```bash
    pip install <each-package-required>
    ```
2) using `requirements.txt
    ```bash
    pip install -r requirements.txt
    ```

## Firing up the API 
**After** setting the environment variable one can use these methods:
1) as python script
    ```bash
    python3 main.py
    ```
2) using uvicorn
    ```
    uvicorn main:app --host 0.0.0.0 --port 8000
    ```

## Notes 
- API needs to be running on port 8000
- Gemini API Token can be saved inside `.env` file, which will be loaded by python script 
- In case `uvicorn` is not detected it should be installed separately ```pip install 'uvicorn[standard]'```

![Good luck!](https://www.icegif.com/wp-content/uploads/good-luck-icegif-12.gif)