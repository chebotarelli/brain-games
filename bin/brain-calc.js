#!/usr/bin/env node

import { gameRules, userQuestion, calcResult } from '../games/b-calc.js';
import engine from '../src/index.js';

console.log(engine(gameRules, userQuestion, calcResult));
