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
exports.getWeatherData = void 0;
// To use endpoint read: [https://www.vedur.is/media/vedurstofan/XML-thjonusta-vedurspar.pdf]
const fast_xml_parser_1 = require("fast-xml-parser");
const node_fetch_1 = __importDefault(require("node-fetch"));
const getWeatherData = (stationId) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL("http://xmlweather.vedur.is/?op_w=xml");
    url.searchParams.append("type", "forec"); // Type of data: forec (forecast), obs (observation)
    url.searchParams.append("lang", "en"); // Language: en, is
    url.searchParams.append("view", "xml");
    url.searchParams.append("ids", stationId ? stationId + "" : "1"); // "Station ID": 1 (Reykjavík). Semi-colon separated. See [http://www.vedur.is/vedur/stodvar] for more IDs
    url.searchParams.append("time", "2h"); // time interval: 1h, 3h, 6h, 12h, 24h. Default 1h
    url.searchParams.append("params", "T;W;R;F;"); // Data to show: T (temperature) W (Weather description) R (Accumulated rainfall). Default is D;T;F; Semi-colon separated.
    try {
        const response = yield (0, node_fetch_1.default)(url.toString());
        if (!response.ok) {
            console.error(response.text);
            return { error: "Failed to fetch weather data" };
        }
        const text = yield response.text();
        const parser = new fast_xml_parser_1.XMLParser();
        const xml = parser.parse(text);
        const data = [];
        xml.forecasts.station.forecast.forEach((forecast) => {
            var _a, _b, _c, _d, _e;
            const dateTime = new Date((_a = forecast.ftime) !== null && _a !== void 0 ? _a : "");
            const weatherData = {
                temp: (_b = Number(forecast.T)) !== null && _b !== void 0 ? _b : -1,
                weather: (_c = forecast.W) !== null && _c !== void 0 ? _c : "",
                rain: (_d = Number(forecast.R)) !== null && _d !== void 0 ? _d : -1,
                wind: (_e = Number(forecast.F)) !== null && _e !== void 0 ? _e : -1,
            };
            data.push({ dateTime, weatherData });
        });
        return { success: data };
    }
    catch (error) {
        console.error(error);
        return { error: "Failed to fetch weather data" };
    }
});
exports.getWeatherData = getWeatherData;
