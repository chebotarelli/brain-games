import getRandomInt from '../getRandomInt.js';

function gameRules() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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

function gameLogic() {
  const result = [];
  const questionForUser = getRandomInt(1, 20);
  result.push(String(questionForUser));
  result.push(isPrime(questionForUser));

  return result;
}

export { gameRules, gameLogic };
