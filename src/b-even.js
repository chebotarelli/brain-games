import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import helloUser from './cli.js';

// func 3 - calculation this game
function evenNumber(questNumber) {
  return questNumber % 2 === 0 ? 'yes' : 'no';
}

// main func - base this game
const brainEven = () => {
  const name = helloUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result;
  let i = 0;

  while (i <= 2) {
    const questNumber = getRandomInt(1, 99);
    console.log(`Question: ${questNumber}`);

    const userAnswer = readlineSync.question('Your answer:');
    const trueAnswer = evenNumber(questNumber);

    if (userAnswer !== trueAnswer) {
      result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
      break;
    } else {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
    }

    i += 1;
  }

  return console.log(result);
};

export default brainEven;
