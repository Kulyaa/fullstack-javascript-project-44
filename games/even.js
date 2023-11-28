import whatName from '../src/cli.js';
import randNumber from '../src/randNumber.js';
import readlineSync from 'readline-sync';

export default () => {
    const name = whatName();
    const comment = 'Answer "yes" if the number is even, otherwise answer "no".';
    let correctAnswer = '';
    console.log(comment);
    for(let i = 0; i < 3; i += 1) {
        let randNum = randNumber(1, 50);
        console.log('Question: ' + randNum);
        let answer = readlineSync.question('Your answer: ');

        if (randNum % 2 == 0 && answer == 'yes') {
            correctAnswer = 'yes';
            console.log('Correct!');
        }
        else if (randNum % 2 == 1 && answer == 'no') {
            correctAnswer = 'no';
            console.log('Correct!');
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`)
            break;
        }
    }
}