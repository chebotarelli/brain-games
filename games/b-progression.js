import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('What number is missing in the progression?');
}

function userQuestion() {
  const userQuestionResult = getRandomInt(1, 20);
  return userQuestionResult;
}

function isPrime(userQuestionResult) {
  if (userQuestionResult <= 1) return 'no';
  if (userQuestionResult % 2 === 0 && userQuestionResult > 2) return 'no';
  const s = Math.sqrt(userQuestionResult);
  for (let i = 3; i <= s; i += 2) {
    if (userQuestionResult % i === 0) return 'no';
  }
  return 'yes';
}

export { gameRules, userQuestion, isPrime };

// main func - base this game
const brainProgression = () => {
    const progression = []; // do progress array
    let startNum = getRandomInt(1, 20); // start 
    const stepArr = getRandomInt(2, 5); // step
    const questNum = getRandomInt(2, 9);

    for (let i = 0; i < 10; i += 1) {
      progression.push(startNum);
      startNum += stepArr;
    }

    const trueAnswer = progression[questNum];
    progression[questNum] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));