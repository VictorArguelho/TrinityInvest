import { getDecimal } from '@utils/format.js';
import { yearToMonth } from '@utils/mat/ratePeriodConverter.js';

import { elements } from '@calculator/calculatorElements.js';

export function getFormValues() {
  const startAmount = elements.startAmount.readValue();
  const contribution = elements.contribution.readValue();
  let rate = elements.rate.readValue().div(10000);
  let period = elements.period.readValue();

  const ratePeriodType = elements.ratePeriodType.value;
  if (ratePeriodType === 'annual') rate = yearToMonth(rate);

  const periodType = elements.periodType.value;
  if (periodType === 'annual') period = period.times(12);

  const formValues = {
    startAmount: startAmount,
    contribution: contribution,
    rate: rate,
    period: period,
  };

  return formValues;
}

export function isFormFilled() {
  return (
    elements.startAmount.isFilled() &&
    elements.contribution.isFilled() &&
    elements.rate.isFilled() &&
    elements.period.isFilled()
  );
}
