import { WeatherData } from "./getWeatherData";
import { ClothingRecommendation, clothingRecs } from "../utils";

export const getClothingRecs = async (
  weatherData: WeatherData[]
): Promise<{
  morning: ClothingRecommendation;
  afternoon: ClothingRecommendation;
}> => {
  // TODO - Check that it is getting the right time by checking the dateTime
  // { dateTime: '', weatherData: {temp: 3, weather: "Clear sky", rain: 0, wind: 1}}
  let morning = weatherData[0].weatherData;
  // { dateTime: '', weatherData: {temp: 3, weather: "Clear sky", rain: 0, wind: 1}}
  let afternoon = weatherData[5].weatherData;

  let recMorning = await clothingRecs({
    temp: morning.temp,
    rain: morning.rain,
    wind: morning.wind,
  });
  let recAfternoon = await clothingRecs({
    temp: afternoon.temp,
    rain: afternoon.rain,
    wind: afternoon.wind,
  });
  return { morning: recMorning, afternoon: recAfternoon };
};
