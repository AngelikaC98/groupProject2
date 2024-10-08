// To use endpoint read: [https://www.vedur.is/media/vedurstofan/XML-thjonusta-vedurspar.pdf]
import { XMLParser } from "fast-xml-parser";

export type WeatherDataIncoming = {
  ftime: string;
  [key: string]: string;
};

export type WeatherData = {
  dateTime: Date;
  weatherData: {
    [key: string]: number | string;
  };
};

export const getWeatherData = async (stationId?: number) => {
  const url = new URL("http://xmlweather.vedur.is/?op_w=xml");
  url.searchParams.append("type", "forec"); // Type of data: forec (forecast), obs (observation)
  url.searchParams.append("lang", "en"); // Language: en, is
  url.searchParams.append("view", "xml");
  url.searchParams.append("ids", stationId ? stationId + "" : "1"); // "Station ID": 1 (Reykjavík). Semi-colon separated. See [http://www.vedur.is/vedur/stodvar] for more IDs
  url.searchParams.append("time", "2h"); // time interval: 1h, 3h, 6h, 12h, 24h. Default 1h
  url.searchParams.append("params", "T;W;R"); // Data to show: T (temperature) W (Weather description) R (Accumulated rainfall). Default is D;T;F; Semi-colon separated.
  console.log("url", url.toString());

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      return { error: "Failed to fetch weather data" };
    }
    const text = await response.text();
    const parser = new XMLParser();
    const xml = parser.parse(text);

    const data: WeatherData[] = [];
    xml.forecasts.station.forecast.forEach((forecast: WeatherDataIncoming) => {
      const dateTime = new Date(forecast.ftime ?? "");
      const weatherData = {
        temp: forecast.T ?? -1,
        weather: forecast.W ?? "",
        rain: forecast.R ?? -1,
      };
      data.push({ dateTime, weatherData });
    });
    return { success: data };
  } catch (error) {
    return { error: "Failed to fetch weather data" };
  }
};
