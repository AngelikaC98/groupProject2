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
    console.log(weather);
    const { temp, rain, wind } = weather;
    const { WarmBaseLayer, BaseLayer, WarmJacket, WarmLongTrousers, Gloves, Jacket, Trousers, RainCoat, RainTrousers, } = Clothing;
    if (temp <= 0 && rain === 0.0 && wind == 0) {
        return {
            Top: [WarmJacket],
            Bottom: [WarmLongTrousers],
            topPic: ["../../images/warm jacket.svg"],
            bottomPic: ["../../images/warm trousers.svg"]
        };
    }
    if (temp <= 5 && rain === 0.0 && wind == 0) {
        return {
            Top: [Jacket],
            Bottom: [WarmLongTrousers],
            topPic: ["../../images/jacket.svg"],
            bottomPic: ["../../images/warm trousers.svg"]
        };
    }
    if (temp > 5 && rain === 0.0 && wind == 0) {
        return {
            Top: [Jacket],
            Bottom: [Trousers],
            topPic: ["../..images/jacket.svg/"],
            bottomPic: ["../../images/trousers.svg"]
        };
    }
    if (temp <= 0 && rain >= 0.0 && wind == 0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["../../images/rain coat.svg"],
            bottomPic: ["../../images/rain trousers.svg"]
        };
    }
    if (temp > 0 && rain >= 0.0 && wind == 0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["../../images/rain coat.svg"],
            bottomPic: ["../../images/rain trousers.svg"]
        };
    }
    if (temp <= 5 && rain === 0.0 && wind <= 5) {
        return {
            Top: [WarmJacket],
            Bottom: [WarmLongTrousers],
            topPic: ["../../images/warm jacket.svg",],
            bottomPic: ["../../images/warm trousers.svg",]
        };
    }
    if (temp <= 5 && rain === 0.0 && wind <= 5) {
        return {
            Top: [Jacket,],
            Bottom: [WarmLongTrousers],
            topPic: ["../../images/jacket.svg"],
            bottomPic: ["../../images/warm trousers.svg"]
        };
    }
    if (temp > 5 && rain === 0.0 && wind <= 5) {
        return {
            Top: [Jacket],
            Bottom: [Trousers],
            topPic: ["../../images/jacket.svg"],
            bottomPic: ["../../images/trousers.svg"]
        };
    }
    if (temp >= 6 && rain == 0.0 && wind >= 6) {
        return {
            Top: [Jacket],
            Bottom: [Trousers],
            topPic: ["../../images/jacket.svg"],
            bottomPic: ["../../images/trousers.svg"]
        };
    }
    if (temp <= 5 && rain >= 0.0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["../../images/rain coat.svg"],
            bottomPic: ["../../images/rain trousers.svg"]
        };
    }
    if (temp > 0 && rain >= 0.0 && wind >= 0) {
        return {
            Top: [RainCoat],
            Bottom: [RainTrousers],
            topPic: ["../../images/rain coat.svg"],
            bottomPic: ["../../images/rain trousers.svg"]
        };
    }
    return { Top: [], Bottom: [], topPic: [], bottomPic: [] };
};
exports.clothingRecs = clothingRecs;
