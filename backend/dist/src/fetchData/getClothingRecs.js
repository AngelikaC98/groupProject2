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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClothingRecs = void 0;
const utils_1 = require("../utils");
const getClothingRecs = (weatherData) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO - Check that it is getting the right time by checking the dateTime
    // { dateTime: '', weatherData: {temp: 3, weather: "Clear sky", rain: 0, wind: 1}}
    let morning = weatherData[0].weatherData;
    // { dateTime: '', weatherData: {temp: 3, weather: "Clear sky", rain: 0, wind: 1}}
    let afternoon = weatherData[5].weatherData;
    let recMorning = yield (0, utils_1.clothingRecs)({
        temp: morning.temp,
        rain: morning.rain,
        wind: morning.wind,
    });
    let recAfternoon = yield (0, utils_1.clothingRecs)({
        temp: afternoon.temp,
        rain: afternoon.rain,
        wind: afternoon.wind,
    });
    return { morning: recMorning, afternoon: recAfternoon };
});
exports.getClothingRecs = getClothingRecs;
