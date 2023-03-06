import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const letGCD = (nOne, nTwo) => {
  if (nTwo) {
    return letGCD(nTwo, nOne % nTwo);
  }
  return Math.abs(nOne);
};

const gameLogic = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const questionForUser = `${numOne} ${numTwo}`;
  const calculationResult = String(letGCD(numOne, numTwo));
  const result = [questionForUser];
  result[1] = calculationResult;
  return result;
};

export default () => {
  runEngine(gameRules, gameLogic);
};
