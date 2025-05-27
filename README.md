# WEATHER_APP
Weather Tracker is a sleek and user-friendly app that fetches real-time weather forecasts and stores them for easy access. Powered by OpenWeatherMap and MongoDB, it lets you track weather data for any location and date range, with smooth management of saved records. Perfect for staying informed and organized!

This is a full-stack Weather Tracker application built with **Node.js**, **Express**, **MongoDB**, and **Vanilla JS** (HTML, CSS, JS). It allows users to fetch weather forecasts for a specific location and date range, store that data in a MongoDB database, and view or delete saved records.

## 🔧 Features

- Get 5-day weather forecast data via the OpenWeatherMap API
- Save and view historical weather records by location and date
- Delete records from the database
- Fully responsive and stylish UI

## 📦 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **API**: OpenWeatherMap Forecast API

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas URI
- OpenWeatherMap API Key

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/PriyanshuVijay1402/weather-app.git
cd weather-app

```Install dependencies:

```
```Installing dependencies
npm install

```
```env file

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
WEATHER_API_KEY=your_openweathermap_api_key
```
```Run the server:

bash
node server/server.js
Visit the app:

Go to http://localhost:5000 in your browser.
