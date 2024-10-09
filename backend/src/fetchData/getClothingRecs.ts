import { getWeatherData } from "./getWeatherData";
import { clothingRecs } from "./utils";

export default async function (): Promise<{ morning: string, afternoon: string}> {
  let weatherData = (await getWeatherData()).success || [];

  // { dateTime: '', weatherData: {temp: 3, weather: "Clear sky", rain: 0, wind: 1}}
  let morning = weatherData[0].weatherData;
  // { dateTime: '', weatherData: {temp: 3, weather: "Clear sky", rain: 0, wind: 1}}
  let afternoon = weatherData[5].weatherData;

  let recMorning = (await clothingRecs({temp: morning.temp, rain: morning.rain, wind: morning.wind}))
  let recAfternoon = (await clothingRecs({temp: afternoon.temp, rain: afternoon.rain, wind: afternoon.wind}))
  return { morning: recMorning, afternoon: recAfternoon };
}
