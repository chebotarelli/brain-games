import readlineSync from 'readline-sync';
import getRandomInt from './getRandomInt.js';
import helloUser from './cli.js';

// main func - base this game
const brainProgression = () => {
  const name = helloUser();
  console.log('What number is missing in the progression?');

  let result;
  let i = 0;

  while (i <= 2) {
    const progression = [];
    let startNum = getRandomInt(1, 20);
    const stepArr = getRandomInt(2, 5);
    const questNum = getRandomInt(2, 9);

    for (let m = 0; m < 10; m += 1) {
      progression.push(startNum);
      startNum += stepArr;
    }

    const trueAnswer = progression[questNum];
    progression[questNum] = '..';
    console.log(`Question: ${progression.join(' ')}`);
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

export default brainProgression;
