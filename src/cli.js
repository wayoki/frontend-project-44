import readlineSync from 'readline-sync';

export let name = '';
export let answer = '';

export const getName = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`)
};

export const getAnswer = () => {
  answer = readlineSync.question('Your answer: ');
};
