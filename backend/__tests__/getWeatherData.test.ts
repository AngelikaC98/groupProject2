import fetchMock from "jest-fetch-mock";
import { getWeatherData } from "../src/fetchData/getWeatherData";

fetchMock.enableMocks();

describe("getWeatherData", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches weather data", async () => {
    const mockResponse = `<?xml version="1.0" encoding="UTF-8"?>
    <forecasts>
      <station>
        <forecast>
          <ftime>2022-01-31T08:00:00Z</ftime>
          <T>1.0</T>
          <W>Partly cloudy</W>
          <R>0.0</R>
          <F>10</F>
        </forecast>
        <forecast>
          <ftime>2022-01-31T09:00:00Z</ftime>
          <T>2.0</T>
          <W>Partly cloudy</W>
          <R>0.0</R>
          <F>10</F>
        </forecast>
      </station>
    </forecasts>`;

    fetchMock.mockResponseOnce(mockResponse);

    const expectedData = [
      {
        dateTime: new Date("2022-01-31T08:00:00Z"),
        weatherData: { temp: 1, weather: "Partly cloudy", rain: 0, wind: 10 },
      },

      {
        dateTime: new Date("2022-01-31T09:00:00Z"),
        weatherData: { temp: 2, weather: "Partly cloudy", rain: 0, wind: 10 },
      },
    ];

    const data = await getWeatherData();

    expect(data).toEqual({ success: expectedData });
    expect(fetchMock.mock.calls.length).toEqual(1);
  });
});
