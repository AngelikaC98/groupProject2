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
const jest_fetch_mock_1 = __importDefault(require("jest-fetch-mock"));
const getWeatherData_1 = require("../src/fetchData/getWeatherData");
jest_fetch_mock_1.default.enableMocks();
describe("getWeatherData", () => {
    beforeEach(() => {
        jest_fetch_mock_1.default.resetMocks();
    });
    it("fetches weather data", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockResponse = `<?xml version="1.0" encoding="UTF-8"?>
    <forecasts>
      <station>
        <forecast>
          <ftime>2022-01-31T08:00:00Z</ftime>
          <T>1.0</T>
          <W>Partly cloudy</W>
          <R>0.0</R>
          <F>10</F>
        </forecast>
        <forecast>
          <ftime>2022-01-31T09:00:00Z</ftime>
          <T>2.0</T>
          <W>Partly cloudy</W>
          <R>0.0</R>
          <F>10</F>
        </forecast>
      </station>
    </forecasts>`;
        jest_fetch_mock_1.default.mockResponseOnce(mockResponse);
        const expectedData = [
            {
                dateTime: new Date("2022-01-31T08:00:00Z"),
                weatherData: { temp: 1, weather: "Partly cloudy", rain: 0, wind: 10 },
            },
            {
                dateTime: new Date("2022-01-31T09:00:00Z"),
                weatherData: { temp: 2, weather: "Partly cloudy", rain: 0, wind: 10 },
            },
        ];
        const data = yield (0, getWeatherData_1.getWeatherData)();
        expect(data).toEqual({ success: expectedData });
        expect(jest_fetch_mock_1.default.mock.calls.length).toEqual(1);
    }));
});
