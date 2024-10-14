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
exports.exportForTesting = exports.getDirections = void 0;
const formatDestination = (destination) => destination.split(" ").join("+");
const calculateArrivalDateTime = () => {
    const date = new Date();
    if (date.getHours() < 9) {
        date.setHours(9, 0, 0, 0);
        return date;
    }
    date.setDate(date.getDate() + 1);
    date.setHours(9, 0, 0, 0);
    return date;
};
const getDirections = (origin, destination) => __awaiter(void 0, void 0, void 0, function* () {
    if (!origin || !destination)
        return { error: "Please provide both origin and destination" };
    const DIRECTIONS_ENDPOINT = "https://maps.googleapis.com/maps/api/directions/json?key=" +
        process.env.GOOGLE_MAPS_API_KEY +
        "&libraries=places";
    const newRequest = new URL(DIRECTIONS_ENDPOINT);
    newRequest.searchParams.append("origin", formatDestination(origin));
    newRequest.searchParams.append("destination", formatDestination(destination));
    newRequest.searchParams.append("arrival_time", "" + calculateArrivalDateTime().getTime());
    try {
        const response = yield fetch(newRequest.toString());
        if (!response.ok) {
            return { error: "Failed to fetch directions" };
        }
        return { success: yield response.json() };
    }
    catch (error) {
        return { error: "Failed to call API" };
    }
});
exports.getDirections = getDirections;
exports.exportForTesting = {
    calculateArrivalDateTime,
};
