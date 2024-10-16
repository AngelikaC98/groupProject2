import * as utils from "./utils";
let weather;
const run = async () => {
    console.log("Running");
    weather = await utils.showWeather();
};
function createDecisionButton() {
    const button = document.getElementById("getWeatherData");
    // Add event listener for the button click
    if (!button)
        return null;
    button.addEventListener("click", async () => {
        // Fetch weather data and check conditions
        let { wind, rain } = weather[3].weatherData;
        // If weather is bad, redirect to drive.html
        // Otherwise redirect to cycle.html
        if (wind > 15 || rain > 2) {
            window.location.href = "drive.html";
        }
        else {
            window.location.href = "cycle.html";
        }
    });
}
// Create the decision button on page load
// run();
createDecisionButton();
