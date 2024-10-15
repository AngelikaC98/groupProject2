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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealthImpact = exports.getWeatherData = exports.clothingRecs = exports.getClimateImpactPerMonth = void 0;
var getClimateImpactPerMonth = function (dailyDistance) {
    var TOYOTA_YARIS_CO2_PER_KM = 127; // grams CO2 per kilometre (sourced from Transport Direct [https://www.aef.org.uk/downloads/Grams_CO2_transportmodesUK.pdf])
    var TESLA_MODEL3_CO2_PER_KM = 0.76; // grams CO2 per kilometre in Iceland (sourced from Landsvirkjun [https://www.landsvirkjun.com] and Tesla [https://www.tesla.com])
    var TREE_CO2_ABSORPTION_PER_MONTH = 21000 / 12; // grams CO2 intake of a fully grown tree per month (sourced from Urban Forestry Network [http://www.urbanforestrynetwork.org])
    // assumes commuting 5 days a week per month
    var monthlyDistance = (dailyDistance * 5 * 52) / 12;
    var savedCO2Kg = Math.round(monthlyDistance * TOYOTA_YARIS_CO2_PER_KM);
    var savedCO2EleKg = Math.round(monthlyDistance * TESLA_MODEL3_CO2_PER_KM);
    return {
        savedCO2: savedCO2Kg / 1000,
        savedCO2Ele: savedCO2EleKg / 1000,
        treesEquivalent: Math.trunc(savedCO2Kg / TREE_CO2_ABSORPTION_PER_MONTH),
        treesEquivalentEle: Math.trunc(savedCO2EleKg / TREE_CO2_ABSORPTION_PER_MONTH),
    };
};
exports.getClimateImpactPerMonth = getClimateImpactPerMonth;
var clothingRecs = function (weather) {
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
var API_ENDPOINT = "http://localhost:3000";
var getWeatherData = function (stationId) { return __awaiter(void 0, void 0, void 0, function () {
    var url, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = new URL(API_ENDPOINT + "/weather");
                if (stationId) {
                    url.searchParams.append("stationId", stationId + "");
                }
                return [4 /*yield*/, fetch(url.toString())];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.json()];
        }
    });
}); };
exports.getWeatherData = getWeatherData;
function showWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var weather, element, weatherNow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, exports.getWeatherData)()];
                case 1:
                    weather = _a.sent();
                    element = document.getElementsByClassName("today-weather")[0];
                    weatherNow = weather[3].weatherData;
                    element.innerHTML = "<p>Temp: ".concat(weatherNow.temp, "\u2103</p>\n  <p> Wind speed: ").concat(weatherNow.wind, " m/s</p>\n  <p> Rain: ").concat(weatherNow.rain, "mm </p>\n  <p> ").concat(weatherNow.weather, "</p>");
                    return [2 /*return*/];
            }
        });
    });
}
showWeather();
var getHealthImpact = function (minutes) {
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
