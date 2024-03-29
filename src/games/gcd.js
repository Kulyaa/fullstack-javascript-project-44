import randNumber from '../randNumber.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const randNum1 = randNumber(1, 50);
  const randNum2 = randNumber(1, 50);
  const question = `${randNum1} ${randNum2}`;
  const correctAnswer = String(getGcd(randNum1, randNum2));

  return [question, correctAnswer];
};
export default () => startGame(rules, generateRound);
