import { getDigits } from '/js/utils/format.js';
import {
  setupFormattedInput,
  symbolPositionId,
} from '/js/utils/input-format/inputFormatter.js';

export function setupCurrencyInput(input) {
  setupFormattedInput(input, 'R$ ', symbolPositionId.prefix);
}

export function setupPercentInput(input) {
  setupFormattedInput(input, '%', symbolPositionId.suffix);
}

export function setupDecimalInput(input) {
  setupFormattedInput(input, '', symbolPositionId.prefix);
}

export function setupIntegerInput(input) {
  input.addEventListener('input', (event) => {
    event.target.value = getDigits(event.target.value);
  });
}
