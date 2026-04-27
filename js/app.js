import { formatDecimalBR, getDigits } from '/js/utils/format.js';

const elements = Object.freeze({
  startAmount: document.getElementById('start-amount'),
  contribution: document.getElementById('contribution'),
  rate: document.getElementById('rate'),
});

setupCurrencyInput(elements.startAmount);
setupCurrencyInput(elements.contribution);
setupPercentInput(elements.rate);

function setupCurrencyInput(input) {
  setupDecimalInput(input, 'R$ ', 'prefix');
}

function setupPercentInput(input) {
  setupDecimalInput(input, '%', 'suffix');
}

function setupDecimalInput(input, symbol, position) {
  if (position === 'suffix') {
    input.addEventListener('beforeinput', (event) =>
      handleSuffixDeleteFix(event, symbol.length),
    );
  }
  input.addEventListener('input', (event) =>
    handleDecimalInput(event, symbol, position),
  );
}

function handleDecimalInput(event, symbol, position) {
  const target = event.target;
  const digits = getDigits(target.value);

  if (digits === '') {
    target.value = '';
    return;
  }

  if (position === 'prefix') {
    target.value = `${symbol}${formatDecimalBR(digits)}`;
  }

  if (position === 'suffix') {
    target.value = `${formatDecimalBR(digits)}${symbol}`;
  }
}

function handleSuffixDeleteFix(event, suffixLength) {
  if (event.inputType === 'deleteContentBackward') {
    const target = event.target;

    const start = target.selectionStart;
    const end = target.selectionEnd;

    if (start !== end) {
      return;
    }

    const valueLimit = target.value.length - suffixLength;

    if (start > valueLimit) {
      target.value = target.value.slice(0, valueLimit);
    }
  }
}
