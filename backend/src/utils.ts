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

export type ClothingRecommendation = {
  Top: Clothing[];
  Bottom: Clothing[];
  topPic: string[];
  bottomPic: string[];
};

export const clothingRecs = (weather: Weather): ClothingRecommendation => {
  const { temp, rain, wind } = weather;
  const {
    WarmJacket,
    WarmLongTrousers,
    Jacket,
    Trousers,
    RainCoat,
    RainTrousers,
  } = Clothing;

  if (temp <= 0 && rain === 0.0 && wind == 0) {
    return {
      Top: [WarmJacket],
      Bottom: [WarmLongTrousers],
      topPic: ["./assets/warm jacket.svg"],
      bottomPic: ["./assets/warm trousers.svg"],
    };
  }
  if (temp <= 5 && rain === 0.0 && wind == 0) {
    return {
      Top: [Jacket],
      Bottom: [WarmLongTrousers],
      topPic: ["./assets/jacket.svg"],
      bottomPic: ["./assets/warm trousers.svg"],
    };
  }
  if (temp > 5 && rain === 0.0 && wind == 0) {
    return {
      Top: [Jacket],
      Bottom: [Trousers],
      topPic: ["../..images/jacket.svg/"],
      bottomPic: ["./assets/trousers.svg"],
    };
  }

  if (temp <= 0 && rain >= 0.0 && wind == 0) {
    return {
      Top: [RainCoat],
      Bottom: [RainTrousers],
      topPic: ["./assets/rain coat.svg"],
      bottomPic: ["./assets/rain trousers.svg"],
    };
  }
  if (temp > 0 && rain >= 0.0 && wind == 0) {
    return {
      Top: [RainCoat],
      Bottom: [RainTrousers],
      topPic: ["./assets/rain coat.svg"],
      bottomPic: ["./assets/rain trousers.svg"],
    };
  }

  if (temp <= 5 && rain === 0.0 && wind <= 5) {
    return {
      Top: [WarmJacket],
      Bottom: [WarmLongTrousers],
      topPic: ["./assets/warm jacket.svg"],
      bottomPic: ["./assets/warm trousers.svg"],
    };
  }
  if (temp <= 5 && rain === 0.0 && wind <= 5) {
    return {
      Top: [Jacket],
      Bottom: [WarmLongTrousers],
      topPic: ["./assets/jacket.svg"],
      bottomPic: ["./assets/warm trousers.svg"],
    };
  }
  if (temp > 5 && rain === 0.0 && wind <= 5) {
    return {
      Top: [Jacket],
      Bottom: [Trousers],
      topPic: ["./assets/jacket.svg"],
      bottomPic: ["./assets/trousers.svg"],
    };
  }

  if (temp >= 6 && rain == 0.0 && wind >= 6) {
    return {
      Top: [Jacket],
      Bottom: [Trousers],
      topPic: ["./assets/jacket.svg"],
      bottomPic: ["./assets/trousers.svg"],
    };
  }
  if (temp <= 5 && rain >= 0.0) {
    return {
      Top: [RainCoat],
      Bottom: [RainTrousers],
      topPic: ["./assets/rain coat.svg"],
      bottomPic: ["./assets/rain trousers.svg"],
    };
  }
  if (temp > 0 && rain >= 0.0 && wind >= 0) {
    return {
      Top: [RainCoat],
      Bottom: [RainTrousers],
      topPic: ["./assets/rain coat.svg"],
      bottomPic: ["./assets/rain trousers.svg"],
    };
  }

  return { Top: [], Bottom: [], topPic: [], bottomPic: [] };
};
