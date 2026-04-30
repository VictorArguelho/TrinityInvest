export const elements = {
  startAmount: null,
  contribution: null,
  rate: null,
  period: null,

  ratePeriodType: null,
  periodType: null,

  calcButton: null,

  resultDiv: null,
};

export function initializeElements() {
  elements.startAmount = document.getElementById('start-amount');
  elements.contribution = document.getElementById('contribution');
  elements.rate = document.getElementById('rate');
  elements.period = document.getElementById('period');

  elements.ratePeriodType = document.getElementById('rate-period-type');
  elements.periodType = document.getElementById('period-type');

  elements.calcButton = document.querySelector('.calculator .button');

  elements.resultDiv = document.querySelector('.calculator-result');
}
