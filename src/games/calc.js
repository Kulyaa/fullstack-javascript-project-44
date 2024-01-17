import randNumber from '../randNumber.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[randNumber(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Invalid operator -${operator}`);
  }
};

const generateRound = () => {
  const randNum1 = randNumber(1, 50);
  const randNum2 = randNumber(1, 50);
  const randOperator = getRandomOperator();
  const correctAnswer = calculation(randNum1, randNum2, randOperator);
  const questions = `${randNum1} ${randOperator} ${randNum2}`;
  return [questions, String(correctAnswer)];
};
export default () => startGame(rules, generateRound);
