export function monthToYear(rate) {
  return Math.pow(1 + rate, 12) - 1;
}

export function yearToMonth(rate) {
  return Math.pow(1 + rate, 1 / 12) - 1;
}
