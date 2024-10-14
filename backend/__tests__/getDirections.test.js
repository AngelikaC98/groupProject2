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
const getDirections_1 = require("../src/fetchData/getDirections");
jest_fetch_mock_1.default.enableMocks();
describe("getDirections", () => {
    beforeEach(() => {
        jest_fetch_mock_1.default.resetMocks();
    });
    it("returns directions when origin and destination are provided", () => __awaiter(void 0, void 0, void 0, function* () {
        jest_fetch_mock_1.default.mockResponseOnce(JSON.stringify({
            routes: [
                {
                    legs: [
                        {
                            duration: { text: "1 hour", value: 3600 },
                            distance: { text: "50 km", value: 50000 },
                            start_address: "Origin Address",
                            start_location: { lat: 0, lng: 0 },
                            end_address: "Destination Address",
                            end_location: { lat: 1, lng: 1 },
                        },
                    ],
                },
            ],
        }));
        const result = yield (0, getDirections_1.getDirections)("origin", "destination");
        expect(result).toEqual({
            success: {
                routes: [
                    {
                        legs: [
                            {
                                duration: { text: "1 hour", value: 3600 },
                                distance: { text: "50 km", value: 50000 },
                                start_address: "Origin Address",
                                start_location: { lat: 0, lng: 0 },
                                end_address: "Destination Address",
                                end_location: { lat: 1, lng: 1 },
                            },
                        ],
                    },
                ],
            },
        });
    }));
    it("returns an error when fetch fails", () => __awaiter(void 0, void 0, void 0, function* () {
        jest_fetch_mock_1.default.mockReject(new Error("Failed to fetch"));
        const result = yield (0, getDirections_1.getDirections)("origin", "destination");
        expect(result).toEqual({ error: "Failed to call API" });
    }));
});
