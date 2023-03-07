import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (questionForUser) => questionForUser % 2 === 0;

const gameLogic = () => {
  const questionForUser = getRandomNumber();
  const calculationResult = isEven(questionForUser) === true ? 'yes' : 'no';
  return [questionForUser, calculationResult];
};

export default () => {
  runEngine(gameRules, gameLogic);
};
