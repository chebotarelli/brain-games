import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('Find the greatest common divisor of given numbers.');
}

function letGCD(nOne, nTwo) {
  if (nTwo) {
    return letGCD(nTwo, nOne % nTwo);
  }
  return Math.abs(nOne);
}

function gameLogic() {
  const result = [];

  const numOne = getRandomInt(1, 10);
  const numTwo = getRandomInt(1, 10);
  const questionForUser = `${numOne} ${numTwo}`;
  result.push(String(questionForUser));

  const questionArray = questionForUser.split(' ');
  const nOne = Number(questionArray[0]);
  const nTwo = Number(questionArray[1]);

  result.push(String(letGCD(nOne, nTwo)));
  return result;
}

export { gameRules, gameLogic };
