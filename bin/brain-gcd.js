#!/usr/bin/env node

import { gameLogic, gameRules } from '../games/b-gcd.js';
import engine from '../src/index.js';

console.log(engine(gameRules, gameLogic));
