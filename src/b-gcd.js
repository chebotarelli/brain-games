/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import helloUser from './cli.js';

// func 3 - calculation this game
function gcd(numOne, numTwo) {
  while (numTwo) {
    const divider = numTwo;
    numTwo = numOne % numTwo;
    numOne = divider;
  }
  return numOne;
}

// main func - base this game
const brainGCD = () => {
  const name = helloUser();
  console.log('Find the greatest common divisor of given numbers.');

  let result;
  let i = 0;

  while (i <= 2) {
    const numOne = getRandomInt(1, 10);
    const numTwo = getRandomInt(1, 10);
    console.log(`Question: ${numOne} ${numTwo}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const trueAnswer = gcd(numOne, numTwo);

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

export default brainGCD;
