import { getHealthImpact } from "../src/utils";

describe("getHealthImpact", () => {
  it("returns health impact", () => {
    const minutes = 40;
    const result = getHealthImpact(minutes);
    const expectedResult = {
      percentOfRecommendedActivity: Math.round((minutes / 150 / 7) * 100),
    };

    expect(result).toEqual(expect.objectContaining(expectedResult));
  });
});
