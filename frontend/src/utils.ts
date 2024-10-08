export const getClimateImpactPerMonth = (dailyDistance: number) => {
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
    treesEquivalentEle: Math.trunc(
      savedCO2EleKg / TREE_CO2_ABSORPTION_PER_MONTH
    ),
  };
};
