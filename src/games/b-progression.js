import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (startNumber, stepProgression, lengthProgression) => {
  const progression = [];
  let start = startNumber;
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(start);
    start += stepProgression;
  }
  return progression;
};

const gameLogic = () => {
  const startNumber = getRandomNumber();
  const stepProgression = getRandomNumber(2, 5);
  const questNum = getRandomNumber(2, 9);
  const lengthProgression = 10;

  const progression = getProgression(startNumber, stepProgression, lengthProgression);
  const calculationResult = progression[questNum];
  progression[questNum] = '..';

  const questionForUser = String(progression.join(' '));
  return [questionForUser, String(calculationResult)];
};

export default () => {
  runEngine(gameRules, gameLogic);
};
