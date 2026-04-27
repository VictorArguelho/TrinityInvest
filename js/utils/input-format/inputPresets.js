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
