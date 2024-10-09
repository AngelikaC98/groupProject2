type Weather = {
  temp: number;
  rain: number;
  wind: number;
};

export enum Clothing {
  WarmBaseLayer = "Warm base layer",
  BaseLayer = "Base layer",
  WarmJacket = "Warm jacket",
  WarmLongTrousers = "Warm long trousers",
  Gloves = "Gloves",
  Jacket = "Jacket",
  Trousers = "Trousers",
  RainCoat = "Rain coat",
  RainTrousers = "Rain trousers",
}

export type ClothingRecommendation = { Top: Clothing[]; Bottom: Clothing[] };

export const clothingRecs = (weather: Weather): ClothingRecommendation => {
  const { temp, rain, wind } = weather;
  const {
    WarmBaseLayer,
    BaseLayer,
    WarmJacket,
    WarmLongTrousers,
    Gloves,
    Jacket,
    Trousers,
    RainCoat,
    RainTrousers,
  } = Clothing;

  if (temp <= 0 && rain === 0.0 && wind == 0) {
    return {
      Top: [WarmJacket, WarmBaseLayer],
      Bottom: [WarmLongTrousers, Gloves],
    };
  }
  if (temp <= 5 && rain === 0.0 && wind == 0) {
    return {
      Top: [Jacket, BaseLayer],
      Bottom: [WarmLongTrousers],
    };
  }
  if (temp > 5 && rain === 0.0 && wind == 0) {
    return { Top: [Jacket], Bottom: [Trousers] };
  }

  if (temp <= 0 && rain >= 0.0 && wind == 0) {
    return {
      Top: [WarmBaseLayer, RainCoat],
      Bottom: [WarmLongTrousers, RainTrousers],
    };
  }
  if (temp > 0 && rain >= 0.0 && wind == 0) {
    return {
      Top: [RainCoat],
      Bottom: [RainTrousers],
    };
  }

  if (temp <= 0 && rain === 0.0 && wind <= 5) {
    return {
      Top: [WarmJacket, WarmBaseLayer],
      Bottom: [WarmLongTrousers, Gloves],
    };
  }
  if (temp <= 5 && rain === 0.0 && wind <= 5) {
    return {
      Top: [Jacket, BaseLayer],
      Bottom: [WarmLongTrousers],
    };
  }
  if (temp > 5 && rain === 0.0 && wind <= 5) {
    return { Top: [Jacket], Bottom: [Trousers] };
  }

  return { Top: [], Bottom: [] };
};
