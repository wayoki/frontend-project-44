import readlineSync from 'readline-sync';

export let name = '';

export const getName = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`)
};
