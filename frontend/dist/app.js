import { getWeatherData, showWeather } from "./utils.js";
function addOnClickHandler() {
    const button = document.getElementById("decision-button");
    if (!button)
        return null;
    button.addEventListener("click", async () => {
        let weather = await getWeatherData();
        let weatherNow = weather[3].weatherData;
        // Check weather conditions for wind and rain then recommend driving or cycling
        if (weatherNow.wind > 15 || weatherNow.rain > 2) {
            window.location.href = "drive.html";
        }
        else {
            window.location.href = "cycle.html";
        }
    });
}
showWeather();
addOnClickHandler();
