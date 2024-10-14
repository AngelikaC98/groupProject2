document.getElementById('decision-button').addEventListener('click', async () => {
    try {
        const weatherData = await fetchWeatherData(); // Fetch weather data from utils.js
            console.log(weatherData)
        // Check if wind speed is greater than 15 m/s and rain is greater than 2 mm
        if (weatherData.windSpeed > 15 && weatherData.rain > 2) {
            document.getElementById('weather-info').innerHTML = `
                <h2 class="text-red-600 font-bold">Weather Alert!</h2>
                <p>Wind Speed: <span class="font-semibold">${weatherData.windSpeed} m/s</span></p>
                <p>Rain: <span class="font-semibold">${weatherData.rain} mm</span></p>
            `;
        } else {
            document.getElementById('weather-info').innerText = "Weather conditions are normal.";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('weather-info').innerText = "Failed to fetch weather data.";
    }
});

// Simulating a fetch function from utils.js
async function fetchWeatherData() {

    console.log(fetchWeatherData())
    // This function would typically call an API or other data source
    return new Promise((resolve) => {
        // Simulated weather data
        const simulatedWeatherData = {
            windSpeed: Math.random() * 30, // Random wind speed between 0 and 30 m/s
            rain: Math.random() * 10 // Random rain between 0 and 10 mm
        };
        setTimeout(() => resolve(simulatedWeatherData), 1000); // Simulate network delay
    });
}
