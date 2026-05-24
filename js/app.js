import { start } from '@calculator/calculatorController.js';
import { Decimal } from '@decimal/decimal.mjs';

Decimal.config({ precision: 1000 });

start();
