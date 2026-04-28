export function formatBRL(cents) {
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
  const roundedValue = Math.round(value);
  const scaledValue = roundedValue / scale;
  const formatedScaledValue = formatNumberBR(scaledValue, decimals);

  if (getNumber(formatedScaledValue) === 0 && blankIfZero) {
    return '';
  }

  return `${prefix}${formatedScaledValue}${sufix}`;
}

export function formatNumberBR(number, decimalLenght) {
  return number.toLocaleString('pt-BR', {
    minimumFractionDigits: decimalLenght,
    maximumFractionDigits: decimalLenght,
  });
}

export function formatNumber(text) {
  if (typeof text !== 'string') return '';
  return text.replace(/\D/g, '');
}

export function getNumber(text) {
  return Number(formatNumber(text));
}
