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
  let i = 1;

  while (i <= 4) {
    const startNum = getRandomInt(1, 20);

    const trueAnswer = isPrime(startNum);

    console.log(`Question: ${startNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (trueAnswer !== userAnswer) {
      result = `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`;
      break;
    } else {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
    }

    i += i;
  }

  return console.log(result);
};

export default brainPrime;
