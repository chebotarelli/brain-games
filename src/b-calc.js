import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import helloUser from './cli.js';

const brainCalc = () => {
  const name = helloUser();
  console.log('What is the result of the expression?');

  let result;
  let i = 0;
  while (i <= 2) {
    const operandOne = getRandomInt(1, 10);
    const operandTwo = getRandomInt(1, 10);
    const operatorNum = getRandomInt(0, 3);
    const operatorArray = ['*', '+', '-'];
    const usOperator = operatorArray[operatorNum];
    console.log(`Question: ${operandOne} ${usOperator} ${operandTwo}`);

    let trueAnswer;
    switch (usOperator) {
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

    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (trueAnswer !== userAnswer) {
      result = `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`;
      break;
    } else {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
    }
    i += 1;
  }

  return console.log(result);
};

export default brainCalc;
