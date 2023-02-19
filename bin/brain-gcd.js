#!/usr/bin/env node

import { gameRules, userQuestion, isGCD } from '../games/b-gcd.js';
import engine from '../src/index.js';

console.log(engine(gameRules, userQuestion, isGCD));
