# Weather App 🌤️

A clean, minimal weather app that shows real-time weather data for any city in the world.

Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## Features

- Search weather by city name
- Displays temperature (°C), weather condition, location, and date
- Serverless API proxy to keep the API key secure
- Deployed on Vercel

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **API:** [OpenWeatherMap](https://openweathermap.org/api)
- **Deployment:** Vercel (with Serverless Functions)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AnushiBisht/Weather_App.git
cd Weather_App
```

### 2. Get an API key

Sign up at [openweathermap.org](https://openweathermap.org/api) and grab a free API key.

### 3. Set up environment variable

Create a `config.js` file in the root:

```
API_KEY=your_openweather_api_key
```

> Never commit this file. It's already in `.gitignore`.

### 4. Run locally

Since this is a plain HTML/JS app, just open `index.html` in your browser.

For the serverless function to work locally, use the Vercel CLI:

```bash
npm i -g vercel
vercel dev
```

---

## Deploying to Vercel

1. Push the repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Go to **Settings → Environment Variables** and add:
   - `API_KEY` → your OpenWeather API key
4. Redeploy

The `/api/weather.js` serverless function proxies requests to OpenWeatherMap, so the API key is never exposed in the browser.

---

## Project Structure

```
Weather_App/
├── api/
│   └── weather.js      # Vercel serverless function
├── index.html          # App markup
├── index.js            # App logic
├── styles.css          # Styling
└── .gitignore
```

---

## How It Works

1. User types a city name and hits Enter
2. Frontend calls `/api/weather?city=cityname`
3. Serverless function fetches data from OpenWeatherMap using the server-side API key
4. Data is returned to the frontend and displayed

---

## License

MIT

##Live Demo
https://weather-app-anushi-bishts-projects.vercel.app/
