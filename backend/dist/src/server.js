"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const getWeatherData_1 = require("./fetchData/getWeatherData");
const getDirections_1 = require("./fetchData/getDirections");
const app = (0, express_1.default)();
const port = 3000;
app.use(cors());
app.get("/weather", express_1.default.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stationId = Number(req.query.stationId);
    const weather = yield (0, getWeatherData_1.getWeatherData)(stationId);
    if (weather.success) {
        res.status(200).json(weather.success);
    }
    else {
        res.status(500).json({ error: weather.error });
    }
}));
app.get("/directions", express_1.default.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { origin, destination } = req.query;
    const directions = yield (0, getDirections_1.getDirections)(origin, destination);
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
    }
    else {
        res.status(500).json({ error: directions.error });
    }
}));
app.listen(port);
