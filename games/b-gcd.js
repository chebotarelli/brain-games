import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('Find the greatest common divisor of given numbers.');
}

function userQuestion() {
  const numOne = getRandomInt(1, 10);
  const numTwo = getRandomInt(1, 10);
  const userQuestionResult = `${numOne} ${numTwo}`;
  return userQuestionResult;
}

function isGCD(userQuestionResult) {
  const questionArray = userQuestionResult.split(' ');
  let numOne = Number(questionArray[0]);
  let numTwo = Number(questionArray[1]);

  while (numTwo) {
    const divider = numTwo;
    numTwo = numOne % numTwo;
    numOne = divider;
  }
  return String(numOne);
}

export { gameRules, userQuestion, isGCD };
