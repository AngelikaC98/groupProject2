import express from "express";
const cors = require('cors');

import { getWeatherData } from "./fetchData/getWeatherData";
import { getDirections } from "./fetchData/getDirections";

const app = express();
const port = 3000;

app.use(cors());

app.get("/weather", express.json(), async (req, res) => {
  const stationId: number = Number(req.query.stationId);
  const weather = await getWeatherData(stationId);
  if (weather.success) {
    res.status(200).json(weather.success);
  } else {
    res.status(500).json({ error: weather.error });
  }
});

app.get("/directions", express.json(), async (req, res) => {
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

app.listen(port);
