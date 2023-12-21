#!/usr/bin/env node
/* eslint-disable consistent-return */
import {
  Congratulations, welcome, choice, name,
} from '../src/cli.js';

function game() {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count !== 3) {
    const task = Math.floor(Math.random() * 100);
    console.log(`Question: ${task}`);
    const yorn = choice();
    if (task % 2 === 0 && yorn === 'yes') {
      console.log('Correct!');
      count += 1;
    }
    if (task % 2 !== 0 && yorn === 'no') {
      console.log('Correct!');
      count += 1;
    }
    if (task % 2 === 0 && yorn === 'no') {
      console.log(`'${yorn}' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${name}!`);
      break;
    }
    if (task % 2 !== 0 && yorn === 'yes') {
      console.log(`'${yorn}' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    Congratulations();
  }
}
game();
