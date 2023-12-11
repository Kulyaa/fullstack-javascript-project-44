import randNumber from '../randNumber.js';
import startGame from '../index.js';

const comment = 'What is the result of the expression?';

const gameLogic = () => {
  const operators = ['+', '-', '*'];
  const randNum1 = randNumber(1, 50);
  const randNum2 = randNumber(1, 50);
  let correctAnswer = 0;
  const randOperator = operators[randNumber(0, operators.length - 1)];
  switch (randOperator) {
    case '+':
      correctAnswer = randNum1 + randNum2;
      break;
    case '-':
      correctAnswer = randNum1 - randNum2;
      break;
    case '*':
      correctAnswer = randNum1 * randNum2;
      break;
    default:
      break;
  }
  const questions = `${randNum1} ${randOperator} ${randNum2}`;
  return [questions, String(correctAnswer)];
};
export default () => startGame(comment, gameLogic);
