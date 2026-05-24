import { toDecimal } from "./mat.js";

export function monthToYear(rate) {
  return rate.plus(1).pow(12).sub(1);
}

export function yearToMonth(rate) {
  return rate.plus(1).pow(1 / 12).sub(1);
}
