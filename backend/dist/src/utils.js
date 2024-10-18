"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clothingRecs = exports.Clothing = void 0;
var Clothing;
(function (Clothing) {
    Clothing["WarmBaseLayer"] = "Warm base layer";
    Clothing["BaseLayer"] = "Base layer";
    Clothing["WarmJacket"] = "Warm jacket";
    Clothing["WarmLongTrousers"] = "Warm long trousers";
    Clothing["Gloves"] = "Gloves";
    Clothing["Jacket"] = "Jacket";
    Clothing["Trousers"] = "Trousers";
    Clothing["RainCoat"] = "Rain coat";
    Clothing["RainTrousers"] = "Rain trousers";
})(Clothing || (exports.Clothing = Clothing = {}));
const clothingRecs = (weather) => {
    const { temp, rain, wind } = weather;
    const { WarmJacket, WarmLongTrousers, Jacket, Trousers, RainCoat, RainTrousers, } = Clothing;
    if (temp <= 0 && rain === 0.0 && wind == 0) {
        return {
            Top: [WarmJacket],
            Bottom: [WarmLongTrousers],
            topPic: ["./assets/warm jacket.svg"],
            bottomPic: ["./assets/warm trousers.svg"],
        };
    }
    if (temp <= 5 && rain === 0.0 && wind == 0) {
        return {
            Top: [Jacket],
            Bottom: [WarmLongTrousers],
            topPic: ["./assets/jacket.svg"],
            bottomPic: ["./assets/warm trousers.svg"],
        };
    }
    if (temp > 5 && rain === 0.0 && wind == 0) {
        return {
            Top: [Jacket],
            Bottom: [Trousers],
            topPic: ["../..images/jacket.svg/"],
            bottomPic: ["./assets/trousers.svg"],
        };
    }
    if (temp <= 0 && rain >= 0.0 && wind == 0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["./assets/rain coat.svg"],
            bottomPic: ["./assets/rain trousers.svg"],
        };
    }
    if (temp > 0 && rain >= 0.0 && wind == 0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["./assets/rain coat.svg"],
            bottomPic: ["./assets/rain trousers.svg"],
        };
    }
    if (temp <= 5 && rain === 0.0 && wind <= 5) {
        return {
            Top: [WarmJacket],
            Bottom: [WarmLongTrousers],
            topPic: ["./assets/warm jacket.svg"],
            bottomPic: ["./assets/warm trousers.svg"],
        };
    }
    if (temp <= 5 && rain === 0.0 && wind <= 5) {
        return {
            Top: [Jacket],
            Bottom: [WarmLongTrousers],
            topPic: ["./assets/jacket.svg"],
            bottomPic: ["./assets/warm trousers.svg"],
        };
    }
    if (temp > 5 && rain === 0.0 && wind <= 5) {
        return {
            Top: [Jacket],
            Bottom: [Trousers],
            topPic: ["./assets/jacket.svg"],
            bottomPic: ["./assets/trousers.svg"],
        };
    }
    if (temp >= 6 && rain == 0.0 && wind >= 6) {
        return {
            Top: [Jacket],
            Bottom: [Trousers],
            topPic: ["./assets/jacket.svg"],
            bottomPic: ["./assets/trousers.svg"],
        };
    }
    if (temp <= 5 && rain >= 0.0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["./assets/rain coat.svg"],
            bottomPic: ["./assets/rain trousers.svg"],
        };
    }
    if (temp > 0 && rain >= 0.0 && wind >= 0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["./assets/rain coat.svg"],
            bottomPic: ["./assets/rain trousers.svg"],
        };
    }
    return { Top: [], Bottom: [], topPic: [], bottomPic: [] };
};
exports.clothingRecs = clothingRecs;
