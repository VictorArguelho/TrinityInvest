let config = {
  startAmount: 0,
  contribution: 0,
  rate: 0,
};

let periodResults = [];

export function getCompoundInterestWithContribution(
  startAmount,
  contribution,
  rate,
  period,
) {
  setup(startAmount, contribution, rate);

  calcPeriod(period);

  return periodResults;
}

function setup(startAmount, contribution, rate) {
  config.startAmount = startAmount;
  config.contribution = contribution;
  config.rate = rate;

  periodResults = [];
}

function calcPeriod(period) {
  if (period === 1) {
    calcPeriodBase();
    return;
  }

  calcPeriod(period - 1);
  calcPeriodGeneric(period);
}

function calcPeriodBase() {
  const interest = config.startAmount * config.rate;
  const finalAmount = config.startAmount + interest + config.contribution;

  periodResults.push({
    period: 1,
    interest: interest,
    totalContribution: config.startAmount + config.contribution,
    totalInterest: interest,
    finalAmount: finalAmount,
  });
}

function calcPeriodGeneric(period) {
  const lastPeriodResults = periodResults[period - 2];
  const lastPeriodFinalAmount = lastPeriodResults.finalAmount;

  const interest = lastPeriodFinalAmount * config.rate;
  const finalAmount = lastPeriodFinalAmount + interest + config.contribution;

  periodResults.push({
    period: period,
    interest: interest,
    totalContribution:
      lastPeriodResults.totalContribution + config.contribution,
    totalInterest: lastPeriodResults.totalInterest + interest,
    finalAmount: finalAmount,
  });
}
