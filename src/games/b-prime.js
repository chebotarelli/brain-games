import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (questionForUser) => {
  for (let i = 2, s = Math.sqrt(questionForUser); i <= s; i += 1) {
    if (questionForUser % i === 0) return false;
  }
  return questionForUser > 1;
};

const gameLogic = () => {
  const questionForUser = getRandomNumber();
  const calculationResult = isPrime(questionForUser) === true ? 'yes' : 'no';
  const result = [questionForUser];
  result[1] = calculationResult;
  return result;
};

export default () => {
  runEngine(gameRules, gameLogic);
};
