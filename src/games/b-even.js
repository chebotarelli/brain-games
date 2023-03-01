import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (questionForUser) => {
  const trueAnswer = questionForUser % 2 === 0 ? 'yes' : 'no';
  return trueAnswer;
};

const gameLogic = () => {
  const result = [];
  const questionForUser = getRandomNumber();
  result.push(String(questionForUser));
  result.push(String(isEven(questionForUser)));
  return result;
};

const runGame = () => {
  runEngine(gameRules, gameLogic);
};

export default runGame;
