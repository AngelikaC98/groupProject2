type Weather = {
  temp: number;
  rain: number;
  wind: number;
};

export enum clothing {
  WARM_BASE_LAYER = "Warm base layer",
  BASE_LAYER = "Base layer",
  WARM_JACKET = "Warm jacket",
  WARM_LONG_TROUSERS = "Warm long trousers",
  GLOVES = "Gloves",
  JACKET = "Jacket",
  TROUSERS = "Trousers",
  RAIN_COAT = "Rain coat",
  RAIN_TROUSERS = "Rain trousers",
}

export type ClothingRecommendation = { Top: clothing[]; Bottom: clothing[] };

export const clothingRecs = (weather: Weather): ClothingRecommendation => {
  if (weather.temp <= 0 && weather.rain === 0.0 && weather.wind == 0) {
    return {
      Top: [clothing.WARM_JACKET, clothing.WARM_BASE_LAYER],
      Bottom: [clothing.WARM_LONG_TROUSERS, clothing.GLOVES],
    };
  }
  if (weather.temp <= 5 && weather.rain === 0.0 && weather.wind == 0) {
    return {
      Top: [clothing.JACKET, clothing.BASE_LAYER],
      Bottom: [clothing.WARM_LONG_TROUSERS],
    };
  }
  if (weather.temp > 5 && weather.rain === 0.0 && weather.wind == 0) {
    return { Top: [clothing.JACKET], Bottom: [clothing.TROUSERS] };
  }

  if (weather.temp <= 0 && weather.rain >= 0.0 && weather.wind == 0) {
    return {
      Top: [clothing.WARM_BASE_LAYER, clothing.RAIN_COAT],
      Bottom: [clothing.WARM_LONG_TROUSERS, clothing.RAIN_TROUSERS],
    };
  }
  if (weather.temp > 0 && weather.rain >= 0.0 && weather.wind == 0) {
    return {
      Top: [clothing.RAIN_COAT],
      Bottom: [clothing.RAIN_TROUSERS],
    };
  }

  if (weather.temp <= 0 && weather.rain === 0.0 && weather.wind <= 5) {
    return {
      Top: [clothing.WARM_JACKET, clothing.WARM_BASE_LAYER],
      Bottom: [clothing.WARM_LONG_TROUSERS, clothing.GLOVES],
    };
  }
  if (weather.temp <= 5 && weather.rain === 0.0 && weather.wind <= 5) {
    return {
      Top: [clothing.JACKET, clothing.BASE_LAYER],
      Bottom: [clothing.WARM_LONG_TROUSERS],
    };
  }
  if (weather.temp > 5 && weather.rain === 0.0 && weather.wind <= 5) {
    return { Top: [clothing.JACKET], Bottom: [clothing.TROUSERS] };
  }

  return { Top: [], Bottom: [] };
};
