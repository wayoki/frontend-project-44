import readlineSync from 'readline-sync';
import { name, getName } from "./cli.js";

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

export { welcome, Congratulations, choice };
