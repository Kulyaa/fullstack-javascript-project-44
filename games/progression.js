import randNumber from '../src/randNumber.js';
import startGame from '../src/index.js';


const comment = 'What number is missing in the progression?';

const gameLogic = () => {
    let randNum1 = randNumber(1, 10);
    let randNum2 = randNumber(10, 15);
    const questions = [];
    for (let i = 1; i < randNum2; i += 1) {
        questions.push(i * randNum1);

    }
    const randel = randNumber(0, questions.length);
    const correctAnswer = questions[randel];
    questions[randel] = '..';
    return [questions, String(correctAnswer)];
}
export default () => startGame(comment, gameLogic);