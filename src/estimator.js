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
  const factor = () => {
    let multiplier;
    const convertedPeriodType = input.periodType.toLowerCase();
    if (convertedPeriodType === 'days') {
      multiplier = 1;
    } else if (convertedPeriodType === 'weeks') {
      multiplier = 7;
    } else if (convertedPeriodType === 'month') {
      multiplier = 30;
    }
    return Math.floor((multiplier * input.timeToElapse) / 3);
  };
  const times = (2 ** factor());
  output.impact.currentlyInfected = input.reportedCases * 10;
  output.severeImpact.currentlyInfected = input.reportedCases * 50;
  output.impact.infectionsByRequestedTime = output.impact.currentlyInfected * (2 ** factor());
  output.severeImpact.infectionsByRequestedTime = output.severeImpact.currentlyInfected * times;
};
export default covid19ImpactEstimator;
