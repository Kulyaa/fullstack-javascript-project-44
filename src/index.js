import whatName from '../src/cli.js';
import readlineSync from 'readline-sync';

const startGame = (description, generateRound) => {
    const name = whatName();
    console.log(description);

    for (let i = 0; i < 3; i++) {
        const [question, answer] = generateRound();
        console.log('Question: ' + question);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== answer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`)
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations ${name}`);
}
export default startGame;