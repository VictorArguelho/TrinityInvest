import { toDecimal } from './mat/mat.js';

export function formatCurrency(cents) {
  return formatScaledValue(cents, 100, 2, 'R$ ', '', true);
}

export function formatPercent(decimalPercent) {
  return formatScaledValue(decimalPercent, 100, 2, '', '%', true);
}

export function formatScaledValue(
  value,
  scale,
  decimals,
  prefix,
  sufix,
  blankIfZero,
) {
  const decimalValue = toDecimal(value);
  const roundedValue = decimalValue.toDecimalPlaces(0);
  const scaledValue = toDecimal(roundedValue.div(scale));
  const formatedScaledValue = formatDecimalBR(scaledValue, decimals);

  if (scaledValue.isZero() && blankIfZero) {
    return '';
  }

  return `${prefix}${formatedScaledValue}${sufix}`;
}

export function formatDecimalBR(decimal, decimalLength = 2) {
  const text = decimal.toFixed(decimalLength);

  const integerPart = text.split('.')[0];
  const decimalPart = text.split('.')[1];

  const formattedInteger = formatThousands(integerPart);

  if (decimalLength > 0) {
    return `${formattedInteger},${decimalPart}`;
  }

  return formattedInteger;
}

export function getDecimal(text) {
  return toDecimal(formatNumber(text));
}

export function formatNumber(text) {
  if (typeof text === 'number') return text.toString();
  if (typeof text !== 'string') return '';
  return text.replace(/\D/g, '');
}

function formatThousands(text) {
  let result = '';
  let count = 0;

  for (let i = text.length - 1; i >= 0; i--) {
    result = text[i] + result;
    count++;

    if (count === 3 && i !== 0) {
      result = '.' + result;
      count = 0;
    }
  }

  return result;
}
