import { toDecimal } from '@utils/mat/mat.js';

let config = {
  startAmount: toDecimal(0),
  contribution: toDecimal(0),
  rate: toDecimal(0),
};

let periodResults = [];

export function getCompoundInterestWithContribution(
  startAmount,
  contribution,
  rate,
  period,
) {
  setup(startAmount, contribution, rate);

  calcPeriodBase();
  console.log(periodResults);
  for (let i = 1; i <= period - 1; i++) {
    calcPeriodGeneric(i);
  }

  return periodResults;
}

function setup(startAmount, contribution, rate) {
  config.startAmount = toDecimal(startAmount);
  config.contribution = toDecimal(contribution);
  config.rate = toDecimal(rate);

  console.log(config.startAmount.toString());
  console.log(config.contribution.toString());
  console.log(config.rate.toString());

  periodResults = [];
}

function calcPeriodBase() {
  const interest = config.startAmount.times(config.rate);
  const finalAmount = config.startAmount
    .plus(interest)
    .plus(config.contribution);

  periodResults.push({
    period: 1,
    interest: interest,
    totalContribution: config.startAmount.plus(config.contribution),
    totalInterest: interest,
    finalAmount: finalAmount,
  });
}

function calcPeriodGeneric(period) {
  const lastPeriodResults = periodResults[period - 1];
  const lastPeriodFinalAmount = lastPeriodResults.finalAmount;

  const interest = lastPeriodFinalAmount.times(config.rate);
  const finalAmount = lastPeriodFinalAmount
    .plus(interest)
    .plus(config.contribution);

  periodResults.push({
    period: period + 1,
    interest: interest,
    totalContribution: lastPeriodResults.totalContribution.plus(
      config.contribution,
    ),
    totalInterest: lastPeriodResults.totalInterest.plus(interest),
    finalAmount: finalAmount,
  });
}
