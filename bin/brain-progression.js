#!/usr/bin/env node

import { gameRules, userQuestion, missingNum } from '../games/b-progression.js';
import engine from '../src/index.js';

console.log(engine(gameRules, userQuestion, missingNum));
