import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (startNumber, stepProgression) => {
  const progression = [];
  let start = startNumber;
  for (let i = 0; i < 10; i += 1) {
    progression.push(start);
    start += stepProgression;
  }
  return progression;
};

const gameLogic = () => {
  const result = [];
  const startNumber = getRandomNumber();
  const stepProgression = getRandomNumber(2, 5);
  const questNum = getRandomNumber(2, 9);

  const progression = getProgression(startNumber, stepProgression);
  const trueAnswer = progression[questNum];
  progression[questNum] = '..';

  result.push(String(progression.join(' ')));
  result.push(String(trueAnswer));
  return result;
};

const runGame = () => {
  runEngine(gameRules, gameLogic);
};

export default runGame;
