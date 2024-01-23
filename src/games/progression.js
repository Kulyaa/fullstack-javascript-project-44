import randNumber from '../randNumber.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = randNumber(1, 10);
  const length = randNumber(10, 15);
  const step = randNumber(0, length);
  const progression = generateProgression(start, step, length);
  const correctAnswer = String(progression[step]);
  progression[step] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(rules, generateRound);
