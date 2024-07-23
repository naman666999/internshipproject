<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Forecast App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Weather Forecast</h1>
            <div class="search">
                <input type="text" id="cityInput" placeholder="Enter city name">
                <button id="searchBtn">Search</button>
            </div>
        </header>
        <section id="currentWeather" class="weather-section">
            <h2>Current Weather</h2>
            <div id="currentWeatherInfo" class="weather-info">
                <img id="weatherIcon" src="" alt="Weather Icon">
                <div>
                    <h3 id="location">City, Country</h3>
                    <p id="temperature">--°C</p>
                    <p id="conditions">--</p>
                </div>
            </div>
        </section>
        <section id="forecast" class="weather-section">
            <h2>7-Day Forecast</h2>
            <div id="forecastList" class="forecast-list"></div>
        </section>
    </div>
    <script src="script.js"></script>
</body>
</html>
