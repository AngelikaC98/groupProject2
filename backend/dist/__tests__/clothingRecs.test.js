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
const utils_1 = require("../src/fetchData/utils");
jest_fetch_mock_1.default.dontMock();
global.Date.now = jest.fn(() => new Date("2022-01-31T08:00:00Z").getTime());
describe("clothingRecs", () => {
    it("fetches weather data", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, utils_1.clothingRecs)({ temp: 2, rain: 0.0, wind: 10 });
    }));
    it("returns correct clothing recommendations for cold, rainy, and calm weather", () => {
        const result = (0, utils_1.clothingRecs)({ temp: -1, rain: 1.0, wind: 0 });
        expect(result).toEqual({
            Top: [utils_1.Clothing.WarmBaseLayer, utils_1.Clothing.RainCoat],
            Bottom: [utils_1.Clothing.WarmLongTrousers, utils_1.Clothing.RainTrousers],
        });
    });
    it("returns correct clothing recommendations for warm, rainy, and calm weather", () => {
        const result = (0, utils_1.clothingRecs)({ temp: 6, rain: 1.0, wind: 0 });
        expect(result).toEqual({
            Top: [utils_1.Clothing.RainCoat],
            Bottom: [utils_1.Clothing.RainTrousers],
        });
    });
    it("returns correct clothing recommendations for cold, dry, and windy weather", () => {
        const result = (0, utils_1.clothingRecs)({ temp: -1, rain: 0.0, wind: 3 });
        expect(result).toEqual({
            Top: [utils_1.Clothing.WarmJacket, utils_1.Clothing.WarmBaseLayer],
            Bottom: [utils_1.Clothing.WarmLongTrousers, utils_1.Clothing.Gloves],
        });
    });
    it("returns correct clothing recommendations for cold, dry, and calm weather", () => {
        const result = (0, utils_1.clothingRecs)({ temp: -1, rain: 0.0, wind: 0 });
        expect(result).toEqual({
            Top: [utils_1.Clothing.WarmJacket, utils_1.Clothing.WarmBaseLayer],
            Bottom: [utils_1.Clothing.WarmLongTrousers, utils_1.Clothing.Gloves],
        });
    });
    it("returns correct clothing recommendations for cool, dry, and calm weather", () => {
        const result = (0, utils_1.clothingRecs)({ temp: 3, rain: 0.0, wind: 0 });
        expect(result).toEqual({
            Top: [utils_1.Clothing.Jacket, utils_1.Clothing.BaseLayer],
            Bottom: [utils_1.Clothing.WarmLongTrousers],
        });
    });
    it("returns correct clothing recommendations for warm, dry, and calm weather", () => {
        const result = (0, utils_1.clothingRecs)({ temp: 6, rain: 0.0, wind: 0 });
        expect(result).toEqual({
            Top: [utils_1.Clothing.Jacket],
            Bottom: [utils_1.Clothing.Trousers],
        });
    });
    it("returns correct clothing recommedations for wind over 5", () => {
        const result = (0, utils_1.clothingRecs)({ temp: 6, rain: 0.0, wind: 6 });
        expect(result).toEqual({
            Top: [utils_1.Clothing.Jacket],
            Bottom: [utils_1.Clothing.Trousers],
        });
    });
});
