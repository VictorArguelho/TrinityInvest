import { formatCurrency } from '@utils/format.js';
import { elements } from '@calculator/calculatorElements.js';

export function renderResults(totalInterest, totalContribution, finalAmount) {
  let resultDiv = document.querySelector('.calculator-result');

  if (!resultDiv) {
    elements.calculator.insertAdjacentHTML('beforeend', getResultDiv());
    resultDiv = document.querySelector('.calculator-result');
  }

  resultDiv.innerHTML = getResultHTML(
    totalInterest,
    totalContribution,
    finalAmount,
  );
}

function getResultHTML(totalInterest, totalContribution, finalAmount) {
  return `
    <span class="text">Total em juros: ${formatCurrency(totalInterest)}</span>
    <span class="text">Total investido: ${formatCurrency(totalContribution)}</span>
    <span class="text">Montante final: ${formatCurrency(finalAmount)}</span>
  `;
}

function getResultDiv() {
  return `
    <div class="calculator-result"></div>
  `;
}
