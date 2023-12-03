import randNumber from '../src/randNumber.js';
import startGame from '../src/index.js';

const comment = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameLogic = () => {
    const questions = randNumber(1, 100);
    let result;
    for (let i = 2; i < questions; i++) {
      if (questions % i === 0) result = false;
    }
    result = questions !== 1;
    if(result) {
        result = 'yes';
    }
    else {
        result = 'no';
    }
    return [String(questions), String(result)];
}

export default () => startGame(comment, gameLogic);