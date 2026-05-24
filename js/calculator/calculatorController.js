import {
  initializeElements,
  elements,
} from '@calculator/calculatorElements.js';

import { calc } from './calculatorLogic.js';

export function start() {
  initializeElements();
  elements.calcButton.addEventListener('click', calc);
}
