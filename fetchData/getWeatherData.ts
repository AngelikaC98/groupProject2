// To use endpoint read: [https://www.vedur.is/media/vedurstofan/XML-thjonusta-vedurspar.pdf]

export const getWeatherData = async (ids?: number[]) => {
  const url = new URL("http://xmlweather.vedur.is/?op_w=xml");
  url.searchParams.append("type", "forec"); // Type of data: forec (forecast), obs (observation)
  url.searchParams.append("lang", "en"); // Language: en, is
  url.searchParams.append("view", "xml");
  url.searchParams.append("ids", ids ? ids.join(";") : "1"); // "Station ID": 1 (Reykjavík). Semi-colon separated. See [http://www.vedur.is/vedur/stodvar] for more IDs
  url.searchParams.append("time", "1h"); // time interval: 1h, 3h, 6h, 12h, 24h. Default 1h
  url.searchParams.append("params", "T;W;R;F;"); // Data to show: T (temperature) W (Weather description) R (Accumulated rainfall). Default is D;T;F; Semi-colon separated.

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to fetch weather data");
  }
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/xml");

  const data = new Map();
  doc.querySelectorAll("forecast").forEach((forecast) => {
    const dateTime = new Date(
      forecast.querySelector("ftime")?.textContent ?? ""
    );
    const weatherData = {
      temp: forecast.querySelector("T")?.textContent,
      weather: forecast.querySelector("W")?.textContent,
      rain: forecast.querySelector("R")?.textContent,
      wind: forecast.querySelector("F")?.textContent,
    };
    data.set(dateTime, weatherData);
  });

  return data;
};
