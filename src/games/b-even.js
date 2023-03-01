import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (questionForUser) => {
  const trueAnswer = questionForUser % 2 === 0 ? 'yes' : 'no';
  return trueAnswer;
};

const gameLogic = () => {
  const questionForUser = getRandomNumber();
  const result = [questionForUser];
  result[1] = String(isEven(questionForUser));
  return result;
};

const runGame = () => {
  runEngine(gameRules, gameLogic);
};

export default runGame;
