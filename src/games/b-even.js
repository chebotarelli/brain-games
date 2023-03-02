import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (questionForUser) => questionForUser % 2 === 0;

const gameLogic = () => {
  const questionForUser = getRandomNumber();
  const result = [questionForUser];
  result[1] = isEven(questionForUser) === true ? 'yes' : 'no';
  return result;
};

const runGame = () => {
  runEngine(gameRules, gameLogic);
};

export default runGame;
