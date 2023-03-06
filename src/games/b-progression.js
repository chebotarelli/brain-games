import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (startNumber, stepProgression) => {
  const progression = [];
  const lengthProgression = 10;
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

  const progression = getProgression(startNumber, stepProgression);
  const calculationResult = progression[questNum];
  progression[questNum] = '..';

  const questionForUser = String(progression.join(' '));
  const result = [questionForUser];
  result[1] = String(calculationResult);
  return result;
};

export default () => {
  runEngine(gameRules, gameLogic);
};
