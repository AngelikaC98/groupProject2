import { getHealthImpact } from "../getHealthImpact";

describe("getHealthImpact", () => {
  it("returns health impact", () => {
    const minutes = 40;
    const result = getHealthImpact(minutes);
    expect(result).toEqual({
      percentOfRecommendedActivity: (minutes / 150) * 100,
      healthImpact: [
        "cut the risk of death from any cause by 41%",
        "the incidence of cancer by 45%",
        "heart disease by 46%",
      ],
    });
  });
});
