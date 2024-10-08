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
  if(weather.temp >= 8 && weather.rain >= 0.0 && weather.wind > 9){
    return 'Top: Optional light jacket Bottom: Shorts or light trousers'
  }
  if(weather.temp <= 2 && weather.rain <= 0.0 && weather.wind >= 12){
    return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers, gloves and hat'
  }
  if(weather.temp <= 8 && weather.rain <= 0.0 && weather.wind >= 11){
    return 'Top: wear a jacket and a base layer. Bottom: Long warm trousers'
  }
  if(weather.temp <= 5 && weather.rain >= 0.4 && weather.wind >= 11){
    return 'Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers'
  }
  if(weather.temp <= 3 && weather.rain <= 0.0 && weather.wind >= 10){
    return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers'
  }
  return undefined;

}

clothingRecs({ temp: 2, rain: 0.0, wind: 10})


/* what I need to do:
1. define Windy and warmer Weather, Rainy and Cool Weather, Cold and Windy Weather, Very Cold and Possible Snow
put some value to that, what is windy and warmer weather??
2. put in  the function, if the weather is cool and rainy today= wear this
if the weather is cold and rainy= wear this

How to do this?

*/
