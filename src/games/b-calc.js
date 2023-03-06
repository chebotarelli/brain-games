import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

const calculate = (operandOne, operator, operandTwo) => {
  let trueAnswer;
  switch (operator) {
    case '+':
      trueAnswer = operandOne + operandTwo;
      return trueAnswer;
    case '-':
      trueAnswer = operandOne - operandTwo;
      return trueAnswer;
    case '*':
      trueAnswer = operandOne * operandTwo;
      return trueAnswer;
    default:
      trueAnswer = console.error('uuups...wtf');
  }
  return trueAnswer;
};

const gameLogic = () => {
  const operandOne = getRandomNumber(1, 10);
  const operandTwo = getRandomNumber(1, 10);
  const operatorIndex = getRandomNumber(0, 3);
  const operators = ['*', '+', '-'];
  const operator = operators[operatorIndex];
  const questionForUser = `${operandOne} ${operator} ${operandTwo}`;
  const calculationResult = String(calculate(operandOne, operator, operandTwo));
  const result = [questionForUser];
  result[1] = calculationResult;
  return result;
};

export default () => {
  runEngine(gameRules, gameLogic);
};
