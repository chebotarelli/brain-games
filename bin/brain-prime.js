#!/usr/bin/env node

import { gameRules, userQuestion, isPrime } from '../games/b-prime.js';
import engine from '../src/index.js';

console.log(engine(gameRules, userQuestion, isPrime));
