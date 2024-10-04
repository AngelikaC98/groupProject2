export const getWeatherData = async (location?: string) => {
  const url =
    "http://xmlweather.vedur.is/?op_w=xml&type=forec&lang=is&view=xml&ids=1;422";
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to fetch weather data");
  }
  const text = await response.text();
  console.log(text);
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/xml");
  return doc;
};
