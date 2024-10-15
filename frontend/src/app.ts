import { getWeatherData } from "./utils.js";

// Function to create the button
function createDecisionButton() {
    // Create the button element
   // const button = document.createElement("button");
//button.innerHTML = "Should I cycle or drive";
   // button.style.padding = "10px 20px";
//button.style.fontSize = "16px";
//button.style.margin = "10px";
    
    // Append the button to the body or a specific div
   // document.body.appendChild(button);
  const button = document.getElementById("getWeatherData")
    // Add event listener for the button click
    if (!button) return null
    button.addEventListener("click", async () => {
      // Fetch weather data and check conditions
      let weather = await getWeatherData();
      let weatherNow = weather[3].weatherData;
  
      // Check weather conditions for wind and rain
      if (weatherNow.wind > 15 || weatherNow.rain > 2) {
        // Redirect to drive.html if conditions are met
        window.location.href = "drive.html";
      } else {
        window.location.href = "cycle.html";
        
        // Display a message recommending cycling
       
      }
    });
  }
  
  // Show weather data on page load
 
  
  // Create the decision button on page load
  createDecisionButton();

function showWeather() {
    throw new Error("Function not implemented.");
}
  