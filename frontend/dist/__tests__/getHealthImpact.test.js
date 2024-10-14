"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
describe("getHealthImpact", () => {
    it("returns health impact", () => {
        const minutes = 40;
        const result = (0, utils_1.getHealthImpact)(minutes);
        const expectedResult = {
            percentOfRecommendedActivity: Math.round((minutes / 150 / 7) * 100),
        };
        expect(result).toEqual(expect.objectContaining(expectedResult));
    });
});
