import {
  setupCurrencyInput,
  setupPercentInput,
  setupIntegerInput,
} from '@utils/inputPresets.js';

import { elements } from '@calculator/calculatorElements.js';
import { calc } from '@calculator/calculatorLogic.js';

export function setup() {
  setupCurrencyInput(elements.startAmount);
  setupCurrencyInput(elements.contribution);
  setupPercentInput(elements.rate);
  setupIntegerInput(elements.period);

  elements.calcButton.addEventListener('click', calc);
}
