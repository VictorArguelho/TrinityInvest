import { formatCurrency, formatNumber, getDecimal } from '../format.js';
import { toDecimal } from '../mat/mat.js';

export class IntegerInput {
  constructor(input) {
    this.input = input;
    this.input.addEventListener(
      'beforeinput',
      () => (this.input.value = formatNumber(this.input.value)),
    );
    this.input.addEventListener('input', () => this.#refresh());
  }

  isFilled() {
    return this.input.value != '';
  }

  readValue() {
    return getDecimal(this.input.value);
  }

  #refresh() {
    this.#setValue(toDecimal(this.readValue()));
  }

  #setValue(currency) {
    this.input.value = formatNumber(Number(currency));
    if (this.input.value === '0') {
      this.input.value = '';
    }
  }
}
