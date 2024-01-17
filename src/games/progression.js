import randNumber from '../randNumber.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (num1, num2) => {
  const arrNums = [];
  for (let i = 1; i < num2; i += 1) {
    arrNums.push(i * num1);
  }
  const randel = randNumber(0, arrNums.length);
  const correctAnswer = arrNums[randel];
  arrNums[randel] = '..';
  const questions = arrNums.join(' ');
  return [questions, String(correctAnswer)];
};

const generateRound = () => {
  const randNum1 = randNumber(1, 10);
  const randNum2 = randNumber(10, 15);
  return generateProgression(randNum1, randNum2);
};
export default () => startGame(rules, generateRound);
