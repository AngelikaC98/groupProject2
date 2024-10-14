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
exports.getHealthImpact = exports.getWeatherData = exports.clothingRecs = exports.getClimateImpactPerMonth = void 0;
const getClimateImpactPerMonth = (dailyDistance) => {
    const TOYOTA_YARIS_CO2_PER_KM = 127; // grams CO2 per kilometre (sourced from Transport Direct [https://www.aef.org.uk/downloads/Grams_CO2_transportmodesUK.pdf])
    const TESLA_MODEL3_CO2_PER_KM = 0.76; // grams CO2 per kilometre in Iceland (sourced from Landsvirkjun [https://www.landsvirkjun.com] and Tesla [https://www.tesla.com])
    const TREE_CO2_ABSORPTION_PER_MONTH = 21000 / 12; // grams CO2 intake of a fully grown tree per month (sourced from Urban Forestry Network [http://www.urbanforestrynetwork.org])
    // assumes commuting 5 days a week per month
    const monthlyDistance = (dailyDistance * 5 * 52) / 12;
    const savedCO2Kg = Math.round(monthlyDistance * TOYOTA_YARIS_CO2_PER_KM);
    const savedCO2EleKg = Math.round(monthlyDistance * TESLA_MODEL3_CO2_PER_KM);
    return {
        savedCO2: savedCO2Kg / 1000,
        savedCO2Ele: savedCO2EleKg / 1000,
        treesEquivalent: Math.trunc(savedCO2Kg / TREE_CO2_ABSORPTION_PER_MONTH),
        treesEquivalentEle: Math.trunc(savedCO2EleKg / TREE_CO2_ABSORPTION_PER_MONTH),
    };
};
exports.getClimateImpactPerMonth = getClimateImpactPerMonth;
const clothingRecs = (weather) => {
    if (weather.temp >= 8 && weather.rain >= 0.0 && weather.wind > 9) {
        return 'Top: Optional light jacket Bottom: Shorts or light trousers';
    }
    if (weather.temp <= 2 && weather.rain <= 0.0 && weather.wind >= 12) {
        return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers, gloves and hat';
    }
    if (weather.temp <= 8 && weather.rain <= 0.0 && weather.wind >= 11) {
        return 'Top: wear a jacket and a base layer. Bottom: Long warm trousers';
    }
    if (weather.temp <= 5 && weather.rain >= 0.4 && weather.wind >= 11) {
        return 'Top: Warm base layer and rain coat. Bottom: Warm long trousers and rain trousers';
    }
    if (weather.temp <= 3 && weather.rain <= 0.0 && weather.wind >= 10) {
        return 'Top: Warm base layer and warm jacket. Bottom: Warm long trousers, protective trousers';
    }
    return undefined;
};
exports.clothingRecs = clothingRecs;
(0, exports.clothingRecs)({ temp: 2, rain: 0.0, wind: 10 });
const API_ENDPOINT = "http://localhost:3000";
const getWeatherData = (stationId) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(API_ENDPOINT + "/weather");
    if (stationId) {
        url.searchParams.append("stationId", stationId + "");
    }
    const res = yield fetch(url.toString());
    return res.json();
});
exports.getWeatherData = getWeatherData;
const getHealthImpact = (minutes) => {
    // Cycle commuting was associated with a lower risk of CVD, cancer, and all cause mortality.
    // Link to the study: [https://www.bmj.com/content/357/bmj.j1456?tab=related#datasupp]
    // regular cycling cut the risk of death from any cause by 41%, the incidence of cancer by 45% and heart disease by 46%.
    // Link [https://www.bbc.com/news/health-39641122]
    // Each week, adults should move briskly for at least 150 minutes
    return {
        percentOfRecommendedActivity: Math.round((minutes / 150 / 7) * 100),
        generalHealthBenefits: [
            "cut the risk of death from any cause by 41%",
            "decrease the incidence of cancer by 45%",
            "decrease the incidence of heart disease by 46%",
        ],
    };
};
exports.getHealthImpact = getHealthImpact;
