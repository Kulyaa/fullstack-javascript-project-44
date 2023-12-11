import randNumber from '../src/randNumber.js';
import startGame from '../src/index.js';

const comment = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameLogic = () => {
  const questions = randNumber(1, 100);
  if (questions < 2) {
    return [String(questions), 'no'];
  }
  for (let i = 2; i < questions; i += 1) {
    if (questions % i === 0) return [String(questions), 'no'];
  }

  return [String(questions), 'yes'];
};

export default () => startGame(comment, gameLogic);
