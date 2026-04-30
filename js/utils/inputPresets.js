import { formatBRL, formatNumber, formatPercent, getNumber } from '@utils/format.js';

export function setupCurrencyInput(input) {
  setupCallbackInput(input, formatBRL);
}

export function setupPercentInput(input) {
  setupCallbackInput(input, formatPercent);
}

export function setupIntegerInput(input) {
  setupCallbackInput(input, (a) => {
    return a;
  });
  input.addEventListener('input', () => {
    if (getNumber(input.value) === 0) input.value = '';
  });
}

function setupCallbackInput(input, callback) {
  input.addEventListener('beforeinput', () => {
    input.value = formatNumber(input.value);
  });

  input.addEventListener('input', () => {
    input.value = callback(formatNumber(input.value));
  });
}
