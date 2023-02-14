import getRandomInt from './getRandomInt.js';

function userQuestion() {
  const result = getRandomInt(1, 20);
  return result;
}

export default userQuestion;
