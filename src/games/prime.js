import randNumber from '../randNumber.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return [String(num), 'no'];
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return [String(num), 'no'];
  }
  return [String(num), 'yes'];
};

const generateRound = () => {
  const questions = randNumber(1, 100);
  return isPrime(questions);
};

export default () => startGame(rules, generateRound);
