import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const brainEven = () => {
  // head
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // body
  let randomNumber = getRandomInt(1, 99);
  console.log(`Question: ${randomNumber}`);
  let answer = readlineSync.question('Your answer:');
  // logic ever or odd
  let contrast = '';
  if (randomNumber % 2 === 0) {
    console.log('number is even (yes)');
    contrast = 'yes';
  } else {
    console.log('number is odd (no)');
    contrast = 'no';
  }
  // comparison q & a
  if (answer === contrast) {
    console.log('Correct!');
  } else {
    console.log('Lol!');
  }
  // other
  return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
};

export default brainEven;
