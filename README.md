
🌦️ Feather Weather App – React Weather Application

A simple and responsive React-based Weather Application that fetches real-time weather data using the OpenWeather API.
It includes a dynamic search feature, reusable UI components, weather icons, and clean styling.

🚀 Features

🌤 Search weather by city

📡 Real-time weather data (temperature, humidity, wind speed, conditions)

🎨 Responsive UI using CSS / Material UI

📦 Reusable components

⚠️ Handles API errors gracefully

🌙 Dynamic weather icons (Clear, Cloudy, Rainy, Snowy, etc.)

🛠️ Tech Stack
Technology	Purpose
React.js	Frontend UI
CSS / Material UI	Styling
OpenWeather API	Weather data
Axios / Fetch	API calls
📁 Folder Structure
src
│── assets/
│── components/
│── Weather.jsx
│── App.jsx
│── Weather.css
│── index.js

⚡ Getting Started
1️⃣ Clone the repository
git clone <your-repo-link>
cd feather-weather-app

2️⃣ Install dependencies
npm install

3️⃣ Add your API Key

Create .env file:

REACT_APP_WEATHER_API_KEY=your_api_key_here

4️⃣ Start the development server
npm start

🔑 API Used

This project uses the OpenWeather REST API
(https://openweathermap.org/api
)

🧩 How It Works

User enters a city name

API is called with the city

Data is displayed using reusable weather components

Weather icons change dynamically based on conditions

Errors are shown if:

City not found

API limit exceeded

Network issues



