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
    const periodTypeInLowerCase = data.periodType.toLowerCase;
    if (periodTypeInLowerCase === 'days') {
      multiplier = Math.floor((input.timeToElapse * 1) / 3);
    } else if (periodTypeInLowerCase === 'weeks') {
      multiplier = Math.floor((input.timeToElapse * 7) / 3);
    } else if (periodTypeInLowerCase === 'months') {
      multiplier = Math.floor((data.timeToElapse * 30) / 3);
    } else {
      multiplier = 1;
    }
    return multiplier;
  };
  const times = (2 ** factor());
  output.impact.currentlyInfected = input.reportedCases * 10;
  output.severeImpact.currentlyInfected = input.reportedCases * 50;
  output.impact.infectionsByRequestedTime = output.impact.currentlyInfected * (2 ** factor());
  output.severeImpact.infectionsByRequestedTime = output.severeImpact.currentlyInfected * times;
};
export default covid19ImpactEstimator;
