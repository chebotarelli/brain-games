import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function userQuestion() {
  const userQuestionResult = getRandomInt(1, 20);
  return userQuestionResult;
}

// function isPrime(userQuestion) {
function isPrime(userQuestionResult) {
  let result;
  if (userQuestionResult === 1) result = 'no';
  for (let i = 2, s = Math.sqrt(userQuestionResult); i <= s; i += 1) {
    result = userQuestionResult % i === 0 ? 'no' : 'yes';
  }
  return result;
}

export { gameRules, userQuestion, isPrime };
