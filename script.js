const apiKey = ('bca1c2cc90ae5154b8cc640c73c6bcb2'); // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    const weatherInfoDiv = document.getElementById('weatherInfo');

    if (!city) {
        weatherInfoDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    fetch('bca1c2cc90ae5154b8cc640c73c6bcb2')
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherInfoDiv.innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                weatherInfoDiv.innerHTML = <p>${data.message}</p>;
            }
        })
        .catch(error => {
            weatherInfoDiv.innerHTML = "<p>Unable to fetch weather data. Please try again later.</p>";
            console.error("Error fetching weather data:", error);
        });
}
