import fetchMock from "jest-fetch-mock";
import { clothing, clothingRecs } from "../src/fetchData/utils";

fetchMock.dontMock();
global.Date.now = jest.fn(() => new Date("2022-01-31T08:00:00Z").getTime());
describe("clothingRecs", () => {
  it("fetches weather data", async () => {
    clothingRecs({ temp: 2, rain: 0.0, wind: 10 });
  });

  it("returns correct clothing recommendations for cold, rainy, and calm weather", () => {
    const result = clothingRecs({ temp: -1, rain: 1.0, wind: 0 });
    expect(result).toEqual({
      Top: [clothing.WARM_BASE_LAYER, clothing.RAIN_COAT],
      Bottom: [clothing.WARM_LONG_TROUSERS, clothing.RAIN_TROUSERS],
    });
  });

  it("returns correct clothing recommendations for warm, rainy, and calm weather", () => {
    const result = clothingRecs({ temp: 6, rain: 1.0, wind: 0 });
    expect(result).toEqual({
      Top: [clothing.RAIN_COAT],
      Bottom: [clothing.RAIN_TROUSERS],
    });
  });

  it("returns correct clothing recommendations for cold, dry, and windy weather", () => {
    const result = clothingRecs({ temp: -1, rain: 0.0, wind: 3 });
    expect(result).toEqual({
      Top: [clothing.WARM_JACKET, clothing.WARM_BASE_LAYER],
      Bottom: [clothing.WARM_LONG_TROUSERS, clothing.GLOVES],
    });
  });

  it("returns correct clothing recommendations for cold, dry, and calm weather", () => {
    const result = clothingRecs({ temp: -1, rain: 0.0, wind: 0 });
    expect(result).toEqual({
      Top: [clothing.WARM_JACKET, clothing.WARM_BASE_LAYER],
      Bottom: [clothing.WARM_LONG_TROUSERS, clothing.GLOVES],
    });
  });

  it("returns correct clothing recommendations for cool, dry, and calm weather", () => {
    const result = clothingRecs({ temp: 3, rain: 0.0, wind: 0 });
    expect(result).toEqual({
      Top: [clothing.JACKET, clothing.BASE_LAYER],
      Bottom: [clothing.WARM_LONG_TROUSERS],
    });
  });

  it("returns correct clothing recommendations for warm, dry, and calm weather", () => {
    const result = clothingRecs({ temp: 6, rain: 0.0, wind: 0 });
    expect(result).toEqual({
      Top: [clothing.JACKET],
      Bottom: [clothing.TROUSERS],
    });
  });
});
