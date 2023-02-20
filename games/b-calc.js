import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('What is the result of the expression?');
}

function calculate(questionForUser) {
  const questionArray = questionForUser.split(' ');
  const operOne = Number(questionArray[0]);
  const operator = questionArray[1];
  const operTwo = Number(questionArray[2]);
  let trueAnswer;
  switch (operator) {
    case '+':
      trueAnswer = operOne + operTwo;
      break;
    case '-':
      trueAnswer = operOne - operTwo;
      break;
    case '*':
      trueAnswer = operOne * operTwo;
      break;
    default:
      trueAnswer = null;
  }
  return trueAnswer;
}

function gameLogic() {
  const result = [];
  const operandOne = getRandomInt(1, 10);
  const operandTwo = getRandomInt(1, 10);
  const operatorNum = getRandomInt(0, 3);
  const operatorArray = ['*', '+', '-'];
  const usOperator = operatorArray[operatorNum];
  const questionForUser = `${operandOne} ${usOperator} ${operandTwo}`;
  result.push(String(questionForUser));
  result.push(String(calculate(questionForUser)));
  return result;
}

export { gameRules, gameLogic };
