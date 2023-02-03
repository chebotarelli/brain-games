import readlineSync from 'readline-sync';

// func 1 - random numbers generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// func 2 - standart user hello
const helloUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// func 3 - calculation this game
function evenNumber(questNumber) {
  return questNumber % 2 === 0 ? 'yes' : 'no';
}

// main func - base this game
const brainEven = () => {
  const name = helloUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = '';
  let i = 1;

  while (i <= 4) {
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

    i += i;
  }

  return console.log(result);
};

export default brainEven;
