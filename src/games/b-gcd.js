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
  const result = [];

  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const questionForUser = `${numOne} ${numTwo}`;
  result.push(String(questionForUser));

  const questionArray = questionForUser.split(' ');
  const nOne = Number(questionArray[0]);
  const nTwo = Number(questionArray[1]);

  result.push(String(letGCD(nOne, nTwo)));
  return result;
};

const runGame = () => {
  runEngine(gameRules, gameLogic);
};

export default runGame;
