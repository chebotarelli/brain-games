import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

function calculate(questionForUser) {
  const questionArray = questionForUser.split(' ');
  const operOne = Number(questionArray[0]);
  const operator = questionArray[1];
  const operTwo = Number(questionArray[2]);
  let trueAnswer;
  switch (operator) {
    case '+':
      trueAnswer = operOne + operTwo;
      return trueAnswer;
    case '-':
      trueAnswer = operOne - operTwo;
      return trueAnswer;
    case '*':
      trueAnswer = operOne * operTwo;
      return trueAnswer;
    default:
      trueAnswer = null;
  }
  return trueAnswer;
}

function gameLogic() {
  const result = [];
  const operandOne = getRandomNumber(1, 10);
  const operandTwo = getRandomNumber(1, 10);
  const operatorIndex = getRandomNumber(0, 3);
  const operators = ['*', '+', '-'];
  const operator = operators[operatorIndex];
  const questionForUser = `${operandOne} ${operator} ${operandTwo}`;
  result.push(String(questionForUser));
  result.push(String(calculate(questionForUser)));
  return result;
}

function runGame() {
  console.log(runEngine(gameRules, gameLogic));
}

export default runGame;
