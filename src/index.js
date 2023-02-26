import readlineSync from 'readline-sync';

function runEngine(gameRules, gameLogic) {
  let result;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRules);
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, trueAnswer] = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (trueAnswer === userAnswer) {
      console.log('Correct!');
      result = `Congratulations, ${name}!`;
    } else {
      result = `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`;
      break;
    }
  }
  return result;
}

export default runEngine;
