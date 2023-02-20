#!/usr/bin/env node

import { gameLogic, gameRules } from '../games/b-progression.js';
import engine from '../src/index.js';

console.log(engine(gameRules, gameLogic));
