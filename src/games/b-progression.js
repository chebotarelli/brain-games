import getRandomNumber from '../getRandomNumber.js';

function gameRules() {
  console.log('What number is missing in the progression?');
}

function gameLogic() {
  const result = [];
  const progression = [];

  let startNum = getRandomNumber(1, 20);
  const stepArr = getRandomNumber(2, 5);
  const questNum = getRandomNumber(2, 9);

  for (let i = 0; i < 10; i += 1) {
    progression.push(startNum);
    startNum += stepArr;
  }

  const trueAnswer = progression[questNum];
  progression[questNum] = '..';

  result.push(String(progression.join(' ')));
  result.push(String(trueAnswer));
  return result;
}

export { gameRules, gameLogic };
