import readlineSync from 'readline-sync';

const count = 3;

const startGame = (description, playFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have you name? ');
  console.log(`${'Hello, '}${name}${'!'}`);
  console.log(description);

  for (let i = 0; i < count; i += 1) {
    const [question, rightAnswer] = playFunction();
    console.log(`${'Question: '}${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default startGame;
