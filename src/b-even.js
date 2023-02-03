import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = '';
  let i = 1;
  while (i <= 4) {
    const randomNumber = getRandomInt(1, 99);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer:');
    if (randomNumber % 2 === 0) {
      contrast = 'yes';
    } else {
      contrast = 'no';
    }

    if (answer !== contrast && contrast === 'yes') {
      result = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
      break;
    } else if (answer !== contrast && contrast === 'no') {
      result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
      break;
    } else {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
    }

    i += i;
  }

  return console.log(result);
};

export default brainEven;
