"use strict";
// To use endpoint read: [https://www.vedur.is/media/vedurstofan/XML-thjonusta-vedurspar.pdf]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const getWeatherData = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL("http://xmlweather.vedur.is/?op_w=xml");
    url.searchParams.append("type", "forec"); // Type of data: forec (forecast), obs (observation)
    url.searchParams.append("lang", "en"); // Language: en, is
    url.searchParams.append("view", "xml");
    url.searchParams.append("ids", ids ? ids.join(";") : "1"); // "Station ID": 1 (Reykjavík). Semi-colon separated. See [http://www.vedur.is/vedur/stodvar] for more IDs
    url.searchParams.append("time", "1h"); // time interval: 1h, 3h, 6h, 12h, 24h. Default 1h
    url.searchParams.append("params", "T;W;R;F;"); // Data to show: T (temperature) W (Weather description) R (Accumulated rainfall). Default is D;T;F; Semi-colon separated.
    const response = yield fetch(url.toString());
    if (!response.ok) {
        console.log(response);
        throw new Error("Failed to fetch weather data");
    }
    const text = yield response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    const data = new Map();
    doc.querySelectorAll("forecast").forEach((forecast) => {
        var _a, _b, _c, _d, _e, _f;
        const dateTime = new Date((_b = (_a = forecast.querySelector("ftime")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : "");
        const weatherData = {
            temp: (_c = forecast.querySelector("T")) === null || _c === void 0 ? void 0 : _c.textContent,
            weather: (_d = forecast.querySelector("W")) === null || _d === void 0 ? void 0 : _d.textContent,
            rain: (_e = forecast.querySelector("R")) === null || _e === void 0 ? void 0 : _e.textContent,
            wind: (_f = forecast.querySelector("F")) === null || _f === void 0 ? void 0 : _f.textContent,
        };
        data.set(dateTime, weatherData);
    });
    return data;
});
exports.getWeatherData = getWeatherData;
