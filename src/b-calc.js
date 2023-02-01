import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let result = '';
  let i = 1;
  while (i <= 4) {
    const operandOne = getRandomInt(1, 10);
    const operandTwo = getRandomInt(1, 10);
    const operatorNum = getRandomInt(0, 3);
    const operatorArray = ['*', '+', '-'];
    const usOperator = operatorArray[operatorNum];
    console.log(`Question: ${operandOne} ${usOperator} ${operandTwo}`);

    let answer = 0;
    switch (usOperator) {
      case '+':
        answer = operandOne + operandTwo;
        break;
      case '-':
        answer = operandOne - operandTwo;
        break;
      case '*':
        answer = operandOne * operandTwo;
        break;
      default:
        answer = null;
    }

    console.log(answer); // del

    const userAnswer = readlineSync.question('Your answer:');

    if (answer === userAnswer) {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
      break;
    } else {
      result = `${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`;
    }

    i += i;
  }

  return console.log(result);
};

export default brainCalc;
