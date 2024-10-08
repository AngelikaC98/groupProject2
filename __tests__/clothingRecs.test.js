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
const utils_1 = require("../utils");
jest_fetch_mock_1.default.dontMock();
describe("should return clothing reccommendation", () => {
    it("fetches weather data", () => __awaiter(void 0, void 0, void 0, function* () {
        // // Call the function
        const data = (0, utils_1.clothingRecs)({ temp: 2, rain: 0.0, wind: 10 });
    }));
    it("When the weather is windy and warm should return Top: Optional light jacket Bottom: Shorts or light trousers", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = (0, utils_1.clothingRecs)({ temp: 10, rain: 0.0, wind: 10 });
        expect(data).toBe('Top: Optional light jacket Bottom: Shorts or light trousers');
    }));
    it("When the weather is windy and cool should return Top: wear a jacket and a base layer. Bottom: wear long warm trousers", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = (0, utils_1.clothingRecs)({ temp: 5, rain: 0.0, wind: 11 });
        expect(data).toBe('Top: wear a jacket and a base layer. Bottom: Long warm trousers');
    }));
    it("When the weather is rainy and cool should return Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = (0, utils_1.clothingRecs)({ temp: 5, rain: 0.4, wind: 11 });
        expect(data).toBe('Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers');
    }));
    it("When the weather is cold and windy should return Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = (0, utils_1.clothingRecs)({ temp: 3, rain: 0.0, wind: 10 });
        expect(data).toBe('Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers');
    }));
    it("When the weather is very cold and windy should return Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers, gloves and hat", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = (0, utils_1.clothingRecs)({ temp: 2, rain: 0.0, wind: 12 });
        expect(data).toBe('Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers, gloves and hat');
    }));
});
