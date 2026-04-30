import { formatBRL } from '@utils/format.js';
import { elements } from '@calculator/calculatorElements.js';

export function renderResults(totalInterest, totalContribution, finalAmount) {
  elements.resultDiv.innerHTML = getResultHTML(
    totalInterest,
    totalContribution,
    finalAmount,
  );
}

function getResultHTML(totalInterest, totalContribution, finalAmount) {
  return `
    <span class="text">Total em juros: ${formatBRL(totalInterest)}</span>
    <span class="text">Total investido: ${formatBRL(totalContribution)}</span>
    <span class="text">Montante final: ${formatBRL(finalAmount)}</span>
  `;
}
