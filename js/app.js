import {
  setupCurrencyInput,
  setupPercentInput,
} from '/js/utils/input-format/inputPresets.js';

const elements = Object.freeze({
  startAmount: document.getElementById('start-amount'),
  contribution: document.getElementById('contribution'),
  rate: document.getElementById('rate'),
});

setupCurrencyInput(elements.startAmount);
setupCurrencyInput(elements.contribution);
setupPercentInput(elements.rate);
