export const getClimateImpactPerMonth = (dailyDistance: number) => {
  const TOYOTA_YARIS_CO2_PER_KM = 127; // grams CO2 per kilometre (sourced from Transport Direct [https://www.aef.org.uk/downloads/Grams_CO2_transportmodesUK.pdf])
  const TESLA_MODEL3_CO2_PER_KM = 0.76; // grams CO2 per kilometre in Iceland (sourced from Landsvirkjun [https://www.landsvirkjun.com] and Tesla [https://www.tesla.com])
  const TREE_CO2_ABSORPTION_PER_MONTH = 21000 / 12; // grams CO2 intake of a fully grown tree per month (sourced from Urban Forestry Network [http://www.urbanforestrynetwork.org])

  // assumes commuting 5 days a week per month
  const monthlyDistance = (dailyDistance * 5 * 52) / 12;

  const savedCO2Kg = Math.round(monthlyDistance * TOYOTA_YARIS_CO2_PER_KM);
  const savedCO2EleKg = Math.round(monthlyDistance * TESLA_MODEL3_CO2_PER_KM);

  return {
    savedCO2: savedCO2Kg / 1000,
    savedCO2Ele: savedCO2EleKg / 1000,
    treesEquivalent: Math.trunc(savedCO2Kg / TREE_CO2_ABSORPTION_PER_MONTH),
    treesEquivalentEle: Math.trunc(
      savedCO2EleKg / TREE_CO2_ABSORPTION_PER_MONTH
    ),
  };
};
type Weather = {
  temp: number,
  rain: number,
  wind: number,
}
export const clothingRecs = (weather: Weather) => {
  if (weather.temp >= 8 && weather.rain >= 0.0 && weather.wind > 9) {
    return 'Top: Optional light jacket Bottom: Shorts or light trousers'
  }
  if (weather.temp <= 2 && weather.rain <= 0.0 && weather.wind >= 12) {
    return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers, gloves and hat'
  }
  if (weather.temp <= 8 && weather.rain <= 0.0 && weather.wind >= 11) {
    return 'Top: wear a jacket and a base layer. Bottom: Long warm trousers'
  }
  if (weather.temp <= 5 && weather.rain >= 0.4 && weather.wind >= 11) {
    return 'Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers'
  }
  if (weather.temp <= 3 && weather.rain <= 0.0 && weather.wind >= 10) {
    return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers'
  }
  return undefined;

}

clothingRecs({ temp: 2, rain: 0.0, wind: 10 })



const API_ENDPOINT = "http://localhost:3000";

export const getWeatherData = async (stationId?: number) => {
  const url = new URL(API_ENDPOINT + "/weather");
  if (stationId) {
    url.searchParams.append("stationId", stationId + "");
  }
  const res = await fetch(url.toString());
  return res.json();
};


async function showWeather() {
  let weather = await getWeatherData()
  let element = document.getElementsByClassName("today-weather")[0]
  let weatherNow = weather[3].weatherData
  element.innerHTML = `<p>Temp: ${weatherNow.temp}℃</p>
  <p> Wind speed: ${weatherNow.wind} m/s</p>
  <p> Rain: ${weatherNow.rain}mm </p>
  <p> ${weatherNow.weather}</p>`
}

showWeather();



export const getHealthImpact = (minutes: number) => {
  // Cycle commuting was associated with a lower risk of CVD, cancer, and all cause mortality.
  // Link to the study: [https://www.bmj.com/content/357/bmj.j1456?tab=related#datasupp]

  // regular cycling cut the risk of death from any cause by 41%, the incidence of cancer by 45% and heart disease by 46%.
  // Link [https://www.bbc.com/news/health-39641122]

  // Each week, adults should move briskly for at least 150 minutes

  return {
    percentOfRecommendedActivity: Math.round((minutes / 150 / 7) * 100),
    generalHealthBenefits: [
      "cut the risk of death from any cause by 41%",
      "decrease the incidence of cancer by 45%",
      "decrease the incidence of heart disease by 46%",
    ],
  };
};



export { }
