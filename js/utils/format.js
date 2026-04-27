export function formatDecimalBR(digits) {
  const amount = Number(digits) / 100;

  return amount.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getDigits(text) {
  return text.replace(/\D/g, '');
}
