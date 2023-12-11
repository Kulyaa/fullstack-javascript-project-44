import randNumber from '../src/randNumber.js';
import startGame from '../src/index.js';

const comment = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  let correctAnswer = '';
  const questions = randNumber(1, 50);
  if (questions % 2 === 0) {
    correctAnswer = 'yes';
  } else if (questions % 2 === 1) {
    correctAnswer = 'no';
  }
  return [questions, correctAnswer];
};

export default () => startGame(comment, gameLogic);
