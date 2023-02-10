// check user answer
function checkCondition(trueAnswer, userAnswer, name) {
  if (trueAnswer !== userAnswer) {
    return `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!`;
  }
  console.log('Correct!');
  return `Congratulations, ${name}!`;
}

export default checkCondition;
