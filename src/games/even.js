import randNumber from '../randNumber.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const calculate = (num) => {
  let correctAnswer = '';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } if (num % 2 === 1) {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const generateRound = () => {
  const questions = randNumber(1, 50);
  const correctAnswer = calculate(questions);
  return [questions, correctAnswer];
};

export default () => startGame(rules, generateRound);
