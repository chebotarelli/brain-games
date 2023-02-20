import getRandomNumber from '../getRandomNumber.js';

function gameRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function gameLogic() {
  const result = [];
  const questionForUser = getRandomNumber(1, 20);
  result.push(String(questionForUser));

  const trueAnswer = questionForUser % 2 === 0 ? 'yes' : 'no';
  result.push(String(trueAnswer));
  return result;
}

export { gameRules, gameLogic };
