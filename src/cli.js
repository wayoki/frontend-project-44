import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let name = '';
// eslint-disable-next-line import/no-mutable-exports
let answer = '';

function getName() {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

function getAnswer() {
  answer = readlineSync.question('Your answer: ');
}

function welcome() {
  console.log('Welcome to the Brain Games!');
  getName(name);
}

function Congratulations() {
  console.log(`Congratulations, ${name}!`);
}

function choice() {
  const yorn = readlineSync.question('Your answer: ');
  return yorn;
}

export {
  welcome, Congratulations, choice, getName, getAnswer, name, answer,
};
