import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function userQuestion() {
  const userQuestionResult = getRandomInt(1, 20);
  return userQuestionResult;
}

function isEven(userQuestionResult) {
  return userQuestionResult % 2 === 0 ? 'yes' : 'no';
}

export { gameRules, userQuestion, isEven };
