// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchBtn');
    const currentWeatherInfo = document.getElementById('currentWeatherInfo');
    const forecastList = document.getElementById('forecastList');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeatherData(city);
        }
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                fetchWeatherData(city);
            }
        }
    });

    function fetchWeatherData(city) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateCurrentWeather(data);
                fetchForecastData(city);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    function updateCurrentWeather(data) {
        const location = document.getElementById('location');
        const temperature = document.getElementById('temperature');
        const conditions = document.getElementById('conditions');
        const weatherIcon = document.getElementById('weatherIcon');

        location.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        conditions.textContent = data.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }

    function fetchForecastData(city) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateForecast(data);
            })
            .catch(error => console.error('Error fetching forecast data:', error));
    }

    function updateForecast(data) {
        forecastList.innerHTML = '';
        data.list.filter(item => item.dt_txt.includes('12:00:00')).forEach(item => {
            const forecastItem = document.createElement('div');
            forecastItem.className = 'forecast-item';
            forecastItem.innerHTML = `
                <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="Weather Icon">
                <h4>${new Date(item.dt_txt).toLocaleDateString()}</h4>
                <p>High: ${Math.round(item.main.temp_max)}°C</p>
                <p>Low: ${Math.round(item.main.temp_min)}°C</p>
            `;
            forecastList.appendChild(forecastItem);
        });
    }
});
