import fetchMock from "jest-fetch-mock";
import { getWeatherData } from "../fetchData/getWeatherData";

fetchMock.dontMock();

describe("getWeatherData", () => {
  it("fetches weather data", async () => {
    // // Call the function
    const data = await getWeatherData([1, 1471]);
    console.log(data);
  });
});
