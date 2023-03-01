import readlineSync from 'readline-sync';

const runEngine = (gameRules, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRules);
  const numberOfRounds = 3;
  let successfulRounds;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, trueAnswer] = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (trueAnswer === userAnswer) {
      console.log('Correct!');
      successfulRounds += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      break;
    }
  }

  if (successfulRounds === numberOfRounds) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runEngine;
