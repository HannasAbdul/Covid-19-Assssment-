const covid19ImpactEstimator = (data) => {
  const input = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };
  const output = {
    data,
    impact: {},
    severeImpact: {}
  };
  // Challenge 1
  //   const factor = Math.floor(convertToDays(periodType, timeToElapse) / 3);
  const factor = Math.floor(input.periodType / 3);
  output.impact.currentlyInfected = input.reportedCases * 10;
  output.severeImpact.currentlyInfected = input.reportedCases * 50;
  output.impact.infectionsByRequestedTime = output.impact.currentlyInfected * (2 ** factor);
  output.severeImpact.infectionsByRequestedTime = output.severeImpact.currentlyInfected * (2 ** factor);
};
export default covid19ImpactEstimator;
