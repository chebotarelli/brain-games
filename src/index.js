import readlineSync from 'readline-sync';
import helloUser from './hello.js';

const engine = (gameRules, userQuestion, calculateGame) => {
  const name = helloUser();

  gameRules();

  let result;

  for (let i = 0; i < 3; i += 1) {
    const question = userQuestion();
    // console.log('QQ ==>', typeof question, question); // !
    const trueAnswer = calculateGame(question);
    console.log('trueAnswer ---> ', trueAnswer, ' <--- trueAnswer'); // delete this - !!!
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
