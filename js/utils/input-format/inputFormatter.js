import { getDigits, formatDecimalBR } from '/js/utils/format.js';

export const symbolPositionId = Object.freeze({
  prefix: 'prefix',
  suffix: 'suffix',
});

export function setupFormattedInput(input, symbol, position) {
  if (position === symbolPositionId.suffix) {
    input.addEventListener('beforeinput', (event) =>
      handleSuffixDeleteFix(event, symbol.length),
    );
  }
  input.addEventListener('input', (event) =>
    handleFormattedInput(event, symbol, position),
  );
}

function handleFormattedInput(event, symbol, position) {
  const target = event.target;
  const digits = getDigits(target.value);

  if (digits === '') {
    target.value = '';
    return;
  }

  if (position === symbolPositionId.prefix) {
    target.value = `${symbol}${formatDecimalBR(digits)}`;
  }

  if (position === symbolPositionId.suffix) {
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
