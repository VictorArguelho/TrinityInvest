import { CurrencyInput } from "../utils/inputs/currencyInput.js";
import { PercentInput } from "../utils/inputs/percentInput.js";
import { IntegerInput } from "../utils/inputs/integerInput.js";

export const elements = {
  calculator: null,

  startAmount: null,
  contribution: null,
  rate: null,
  period: null,

  ratePeriodType: null,
  periodType: null,

  calcButton: null,
};

export function initializeElements() {
  elements.calculator = document.querySelector('.calculator');

  elements.startAmount = new CurrencyInput(document.getElementById('start-amount'));
  elements.contribution = new CurrencyInput(document.getElementById('contribution'));
  elements.rate =  new PercentInput(document.getElementById('rate'));
  elements.period = new IntegerInput(document.getElementById('period'));

  elements.ratePeriodType = document.getElementById('rate-period-type');
  elements.periodType = document.getElementById('period-type');

  elements.calcButton = document.querySelector('.calculator-form .button');
}
