import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('!!!!!!!!!!');
  console.log(`Hello, ${name}!`);
  return console.log(`Hello, ${name}!`);
};

export default brainEven;
