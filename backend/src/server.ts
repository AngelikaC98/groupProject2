import express from "express";
import { getWeatherData } from "./fetchData/getWeatherData";

const app = express();
const port = 3000;

app.get("/weather", express.json(), async (req, res) => {
  const stationId: number = Number(req.query.stationId);
  const weather = await getWeatherData(stationId);
  if (weather.success) {
    res.status(200).json(weather.success);
  } else {
    res.status(500).json({ error: weather.error });
  }
});
