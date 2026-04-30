import { getCompoundInterestWithContribution } from '@utils/mat/compoundInterest.js';

import { getFormValues, isFormFilled } from '@calculator/calculatorReader.js';
import { renderResults } from '@calculator/calculatorRenderer.js';

export function calc() {
  if (!isFormFilled()) {
    console.log('vai se foder, preenche essa porra');
    return;
  }

  const formValues = getFormValues();
  const periodResults = getCompoundInterestWithContribution(
    formValues.startAmount,
    formValues.contribution,
    formValues.rate,
    formValues.period,
  );
  const lastPeriodResult = periodResults.at(-1);

  renderResults(
    lastPeriodResult.totalInterest,
    lastPeriodResult.totalContribution,
    lastPeriodResult.finalAmount,
  );
}
