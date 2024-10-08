import fetchMock from "jest-fetch-mock";
import { clothingRecs } from "../utils";

fetchMock.dontMock();

describe("should return clothing reccommendation", () => {
  it("fetches weather data", async () => {
    // // Call the function
    const data = clothingRecs({ temp: 2, rain: 0.0, wind: 10 });
  });

  it("When the weather is windy and warm should return Top: Optional light jacket Bottom: Shorts or light trousers", async () => {
    const data = clothingRecs({ temp: 10, rain: 0.0, wind: 10 });
    expect(data).toBe('Top: Optional light jacket Bottom: Shorts or light trousers')
  });
  it("When the weather is windy and cool should return Top: wear a jacket and a base layer. Bottom: wear long warm trousers", async () => {
    const data = clothingRecs({ temp: 5, rain: 0.0, wind: 11 });
    expect(data).toBe('Top: wear a jacket and a base layer. Bottom: Long warm trousers')
  });
  it("When the weather is rainy and cool should return Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers", async () => {
    const data = clothingRecs({ temp: 5, rain: 0.4, wind: 11 });
    expect(data).toBe('Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers')
  });
  it("When the weather is cold and windy should return Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers", async () => {
    const data = clothingRecs({ temp: 3, rain: 0.0, wind: 10 });
    expect(data).toBe('Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers')
  });
  it("When the weather is very cold and windy should return Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers, gloves and hat", async () => {
    const data = clothingRecs({ temp: 2, rain: 0.0, wind: 12 });
    expect(data).toBe('Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers, gloves and hat')
  });
});
