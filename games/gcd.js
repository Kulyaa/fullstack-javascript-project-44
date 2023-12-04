import randNumber from '../src/randNumber.js';
import startGame from '../src/index.js';

const comment = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  let randNum1 = randNumber(1, 50);
  let randNum2 = randNumber(1, 50);
  const questions = `${randNum1} ${randNum2}`;
  while (randNum1 !== 0 & randNum2 !== 0) {
    if (randNum1 > randNum2) {
      randNum1 %= randNum2;
    } else {
      randNum2 %= randNum1;
    }
  }
  const correctAnswer = randNum1 + randNum2;

  return [questions, String(correctAnswer)];
};
export default () => startGame(comment, gameLogic);
