#!/usr/bin/env node

import { gameRules, userQuestion, isEven } from '../games/b-even.js';
import engine from '../src/index.js';

console.log(engine(gameRules, userQuestion, isEven));
