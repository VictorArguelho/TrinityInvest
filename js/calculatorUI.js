import {
  setupCurrencyInput,
  setupPercentInput,
  setupIntegerInput,
} from '/js/utils/input-format/inputPresets.js';

const elements = {
  startAmount: null,
  contribution: null,
  rate: null,
  period: null,
};

export function start() {
  initializeElements();

  setupCurrencyInput(elements.startAmount);
  setupCurrencyInput(elements.contribution);
  setupPercentInput(elements.rate);
  setupIntegerInput(elements.period);
}

function initializeElements() {
  elements.startAmount = document.getElementById('start-amount');
  elements.contribution = document.getElementById('contribution');
  elements.rate = document.getElementById('rate');
  elements.period = document.getElementById('period');
}
