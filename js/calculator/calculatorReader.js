import { getNumber } from '@utils/format.js';
import { yearToMonth } from '@utils/mat/ratePeriodConverter.js';

import { elements } from '@calculator/calculatorElements.js';

export function getFormValues() {
  const startAmount = elements.startAmount.value;
  const contribution = elements.contribution.value;

  let rate;
  const ratePeriodType = elements.ratePeriodType.value;
  if (ratePeriodType === 'annual') {
    rate = yearToMonth(getNumber(elements.rate.value) / 10000);
  } else {
    rate = elements.rate.value;
  }

  let period;
  const periodType = elements.periodType.value;
  if (periodType === 'annual') {
    period = elements.period.value * 12;
  } else {
    period = elements.period.value;
  }

  const porra = {
    startAmount: getNumber(startAmount),
    contribution: getNumber(contribution),
    rate: rate,
    period: getNumber(period),
  };

  console.log(porra);

  return porra;
}

export function isFormFilled() {
  const startAmount = elements.startAmount.value;
  const contribution = elements.contribution.value;
  const rate = elements.rate.value;
  const period = elements.period.value;

  return startAmount != '' && contribution != '' && rate != '' && period != '';
}
