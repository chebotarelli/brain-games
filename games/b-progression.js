import getRandomInt from '../src/getRandomInt.js';

function gameRules() {
  console.log('What number is missing in the progression?');
}

function userQuestion() {
  const progression = []; // do progress array
  let startNum = getRandomInt(1, 20);
  const stepArr = getRandomInt(2, 5);
  const questNum = getRandomInt(2, 9);

  for (let i = 0; i < 10; i += 1) {
    progression.push(startNum);
    startNum += stepArr;
  }

  const trueAnswer = progression[questNum];
  console.log('trueAnswer', typeof trueAnswer, trueAnswer);
  progression[questNum] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return progression.join(' ');
}

// edit this function (calculate missing number or fix engine and fix all over games) =(

function missingNum() {
  const answer = '15';
  return answer;
}

export { gameRules, userQuestion, missingNum };
