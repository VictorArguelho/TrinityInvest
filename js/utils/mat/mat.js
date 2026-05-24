import { Decimal } from '@decimal/decimal.mjs';
import { formatNumber } from '../format.js';

export function toDecimal(number) {
  if (number === '') {
    return new Decimal(0);
  }
  return new Decimal(number);
}
