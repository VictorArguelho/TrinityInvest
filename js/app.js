import { start } from '@calculator/calculatorController.js';
import Decimal from 'decimal.js';

Decimal.config({ precision: 1000 });

start();
