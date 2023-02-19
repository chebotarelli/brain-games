import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('What is the result of the expression?');
}

function userQuestion() {
  const operandOne = getRandomInt(1, 10);
  const operandTwo = getRandomInt(1, 10);
  const operatorNum = getRandomInt(0, 3);
  const operatorArray = ['*', '+', '-'];
  const usOperator = operatorArray[operatorNum];
  const userQuestionResult = `${operandOne} ${usOperator} ${operandTwo}`;
  return userQuestionResult;
}

function calcResult(userQuestionResult) {
  const questionArray = userQuestionResult.split(' ');

  const operandOne = Number(questionArray[0]);
  const operator = questionArray[1];
  const operandTwo = Number(questionArray[2]);

  let trueAnswer;
  switch (operator) {
    case '+':
      trueAnswer = operandOne + operandTwo;
      break;
    case '-':
      trueAnswer = operandOne - operandTwo;
      break;
    case '*':
      trueAnswer = operandOne * operandTwo;
      break;
    default:
      trueAnswer = null;
  }
  return String(trueAnswer);
}

export { gameRules, userQuestion, calcResult };
