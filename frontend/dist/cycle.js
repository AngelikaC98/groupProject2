import { showClothRecs, getClimateImpactPerMonth, DISTANCE, showWeather, getHealthImpact, } from "./utils.js";
const { savedCO2, treesEquivalent } = getClimateImpactPerMonth(DISTANCE);
const AVERAGE_SPEED = 15;
const TIME_CYCLING = (DISTANCE / AVERAGE_SPEED) * 60 * 2;
const { percentOfRecommendedActivity } = getHealthImpact(TIME_CYCLING);
const savedCO2Element = document.getElementById("savedCO2");
if (savedCO2Element) {
    savedCO2Element.innerHTML = savedCO2 + " kg";
}
const treesEquivalentElement = document.getElementById("treesEquivalent");
if (treesEquivalentElement) {
    treesEquivalentElement.innerHTML = treesEquivalent + " trees";
}
const distanceElement = document.getElementById("distance");
if (distanceElement) {
    distanceElement.innerHTML = DISTANCE + " km";
}
const activityPercentageElement = document.getElementById("activityPercentage");
if (activityPercentageElement) {
    activityPercentageElement.innerHTML = percentOfRecommendedActivity + " %";
}
showWeather();
showClothRecs();
