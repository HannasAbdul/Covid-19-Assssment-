const data = {
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const factor = () => {
  let multiplier;
  const convertedPeriodType = data.periodType.toLowerCase();
  if (convertedPeriodType === 'days') {
    multiplier = 1;
  } else if (convertedPeriodType === 'weeks') {
    multiplier = 7;
  } else if (convertedPeriodType === 'months') {
    multiplier = 30;
  }
  return Math.floor((multiplier * data.timeToElapse) / 3);
};


const covid19ImpactEstimator = () => ({
  data,
  impact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** factor())


  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: (data.reportedCases * 50) * (2 ** factor())
  }
});
export default covid19ImpactEstimator;
