import getRandomInt from '../getRandomInt.js';

function gameRules() {
  console.log('What number is missing in the progression?');
}

function gameLogic() {
  const result = [];
  const progression = [];

  let startNum = getRandomInt(1, 20);
  const stepArr = getRandomInt(2, 5);
  const questNum = getRandomInt(2, 9);

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
