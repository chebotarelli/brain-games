#!/usr/bin/env node

import { gameLogic, gameRules } from '../games/b-calc.js';
import engine from '../src/index.js';

console.log(engine(gameRules, gameLogic));
