export const getHealthImpact = (minutes: number) => {
  return {
    percentOfRecommendedActivity: (minutes / 150) * 100,
    healthImpact: [
      "cut the risk of death from any cause by 41%",
      "the incidence of cancer by 45%",
      "heart disease by 46%",
    ],
  };
};

// Cycle commuting was associated with a lower risk of CVD, cancer, and all cause mortality.
// Link to the study: [https://www.bmj.com/content/357/bmj.j1456?tab=related#datasupp]

// regular cycling cut the risk of death from any cause by 41%, the incidence of cancer by 45% and heart disease by 46%.
// Link [https://www.bbc.com/news/health-39641122]

// Each week, adults should move briskly for at least 150 minutes
