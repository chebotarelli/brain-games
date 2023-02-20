import readlineSync from 'readline-sync';
import helloUser from './hello.js';

const engine = (gameRules, gameLogic) => {
  let result;
  const name = helloUser();

  gameRules();

  for (let i = 0; i < 3; i += 1) {
    const [question, trueAnswer] = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (trueAnswer !== userAnswer) {
      result = `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`;
      break;
    } else {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
    }
  }
  return result;
};

export default engine;
