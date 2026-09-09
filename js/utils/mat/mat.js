import Decimal from "decimal.js";

export function toDecimal(number) {
  if (number === '') {
    return new Decimal(0);
  }
  return new Decimal(number);
}
