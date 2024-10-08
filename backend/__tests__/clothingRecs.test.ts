import fetchMock from "jest-fetch-mock";
import { Clothing, clothingRecs } from "../src/fetchData/utils";

fetchMock.dontMock();
global.Date.now = jest.fn(() => new Date("2022-01-31T08:00:00Z").getTime());
describe("clothingRecs", () => {
  it("fetches weather data", async () => {
    clothingRecs({ temp: 2, rain: 0.0, wind: 10 });
  });

  it("returns correct clothing recommendations for cold, rainy, and calm weather", () => {
    const result = clothingRecs({ temp: -1, rain: 1.0, wind: 0 });
    expect(result).toEqual({
      Top: [Clothing.WarmBaseLayer, Clothing.RainCoat],
      Bottom: [Clothing.WarmLongTrousers, Clothing.RainTrousers],
    });
  });

  it("returns correct clothing recommendations for warm, rainy, and calm weather", () => {
    const result = clothingRecs({ temp: 6, rain: 1.0, wind: 0 });
    expect(result).toEqual({
      Top: [Clothing.RainCoat],
      Bottom: [Clothing.RainTrousers],
    });
  });

  it("returns correct clothing recommendations for cold, dry, and windy weather", () => {
    const result = clothingRecs({ temp: -1, rain: 0.0, wind: 3 });
    expect(result).toEqual({
      Top: [Clothing.WarmJacket, Clothing.WarmBaseLayer],
      Bottom: [Clothing.WarmLongTrousers, Clothing.Gloves],
    });
  });

  it("returns correct clothing recommendations for cold, dry, and calm weather", () => {
    const result = clothingRecs({ temp: -1, rain: 0.0, wind: 0 });
    expect(result).toEqual({
      Top: [Clothing.WarmJacket, Clothing.WarmBaseLayer],
      Bottom: [Clothing.WarmLongTrousers, Clothing.Gloves],
    });
  });

  it("returns correct clothing recommendations for cool, dry, and calm weather", () => {
    const result = clothingRecs({ temp: 3, rain: 0.0, wind: 0 });
    expect(result).toEqual({
      Top: [Clothing.Jacket, Clothing.BaseLayer],
      Bottom: [Clothing.WarmLongTrousers],
    });
  });

  it("returns correct clothing recommendations for warm, dry, and calm weather", () => {
    const result = clothingRecs({ temp: 6, rain: 0.0, wind: 0 });
    expect(result).toEqual({
      Top: [Clothing.Jacket],
      Bottom: [Clothing.Trousers],
    });
  });
  it("returns correct clothing recommedations for wind over 5", () => {
    const result = clothingRecs({temp: 6, rain: 0.0, wind: 6});
    expect(result).toEqual({
      Top: [Clothing.Jacket],
      Bottom: [Clothing.Trousers],

    });
  })
});
