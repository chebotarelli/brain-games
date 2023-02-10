import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import helloUser from './cli.js';
// import checkCondition from './checkCondition.js';

// func 3 - prime number
function isPrime(num) {
  if (num === 1) return 'no';
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
}

// main func - base this game
const brainPrime = () => {
  const name = helloUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let result;
  let i = 0;

  while (i <= 2) {
    const startNum = getRandomInt(1, 20);

    const trueAnswer = isPrime(startNum);

    console.log(`Question: ${startNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // result = checkCondition(trueAnswer, userAnswer, name);

    if (trueAnswer !== userAnswer) {
      result = `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`;
      break;
    } else {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
    }

    i += 1;
  }

  return result;
};

export default brainPrime;
