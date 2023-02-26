import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(questionForUser) {
  const trueAnswer = questionForUser % 2 === 0 ? 'yes' : 'no';
  return trueAnswer;
}

function gameLogic() {
  const result = [];
  const questionForUser = getRandomNumber(1, 20);
  result.push(String(questionForUser));
  result.push(String(isEven(questionForUser)));
  return result;
}

function runGame() {
  console.log(runEngine(gameRules, gameLogic));
}

export default runGame;
