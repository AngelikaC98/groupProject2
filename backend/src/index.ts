import express from "express";
const cors = require("cors");

import { getWeatherData } from "./fetchData/getWeatherData";
import { getDirections } from "./fetchData/getDirections";
import { getClothingRecs } from "./fetchData/getClothingRecs";

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());

app.get("/weather", express.json(), async (req: any, res: any) => {
  const stationId: number = Number(req.query.stationId);
  const weather = await getWeatherData(stationId);
  if (weather.success) {
    res.status(200).json(weather.success);
  } else {
    res.status(500).json({ error: weather.error });
  }
});

app.get("/clothes", express.json(), async (req: any, res: any) => {
  const weather = await getWeatherData(1);

  if (weather.success) {
    const clothes = await getClothingRecs(weather.success);
    res.status(200).json(clothes);
  } else {
    res.status(500).json({ error: weather.error });
  }
});

app.get("/directions", express.json(), async (req: any, res: any) => {
  const { origin, destination } = req.query as {
    origin: string;
    destination: string;
  };
  const directions = await getDirections(origin, destination);
  if (directions.success && directions.success.routes.length > 0) {
    const response = {
      duration: directions.success.routes[0].legs[0].duration.text,
      distance: directions.success.routes[0].legs[0].distance.text,
      startAddress: {
        address: directions.success.routes[0].legs[0].start_address,
        location: directions.success.routes[0].legs[0].start_location,
      },
      endAddress: {
        address: directions.success.routes[0].legs[0].end_address,
        location: directions.success.routes[0].legs[0].end_location,
      },
      directions: directions.success,
    };

    res.status(200).json(response);
  } else {
    res.status(500).json({ error: directions.error });
  }
});

console.log(`Server is running at http://localhost:${port}.`);
app.listen(port);
