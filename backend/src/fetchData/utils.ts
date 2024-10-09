type Weather = {
  temp: number,
  rain: number,
  wind: number,
}
export const clothingRecs = (weather: Weather) => {
  if (weather.temp <= 0 && weather.rain === 0.0 && weather.wind == 0) {
    return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers and gloves'
  }
  if (weather.temp <= 5 && weather.rain === 0.0 && weather.wind == 0) {
    return 'Top: wear a jacket and a base layer. Bottom: Long warm trousers'
  }
  if (weather.temp > 5 && weather.rain === 0.0 && weather.wind == 0) {
    return 'Top: Optional light jacket Bottom: Shorts or light trousers'
  }

  if (weather.temp <= 0 && weather.rain >= 0.0 && weather.wind == 0) {
    return 'Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers'
  }
  if (weather.temp > 0 && weather.rain >= 0.0 && weather.wind == 0) {
    return 'Top: Rain coat. Bottom: Rain trousers'
  }

  if (weather.temp <= 0 && weather.rain === 0.0 && weather.wind <= 5) {
    return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers and gloves'
  }
  if (weather.temp <= 5 && weather.rain === 0.0 && weather.wind <= 5) {
    return 'Top: wear a jacket and a base layer. Bottom: Long warm trousers'
  }
  if (weather.temp > 5 && weather.rain === 0.0 && weather.wind <= 5) {
    return 'Top: Optional light jacket Bottom: Shorts or light trousers'
  }

  return 'No clothing recommendations for today, sorry!';

}
