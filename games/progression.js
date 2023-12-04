import randNumber from '../src/randNumber.js';
import startGame from '../src/index.js';

const comment = 'What number is missing in the progression?';

const gameLogic = () => {
  const randNum1 = randNumber(1, 10);
  const randNum2 = randNumber(10, 15);
  const arrNums = [];
  for (let i = 1; i < randNum2; i += 1) {
    arrNums.push(i * randNum1);
  }
  const randel = randNumber(0, arrNums.length);
  const correctAnswer = arrNums[randel];
  arrNums[randel] = '..';
  const questions = arrNums.join(' ');
  return [questions, String(correctAnswer)];
};
export default () => startGame(comment, gameLogic);
