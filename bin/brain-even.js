#!/usr/bin/env node
import { Congratulations, welcome, choice } from '../src/callback.js';

function game() {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let win = 0;
  while (win !== 3) {
    const task = Math.floor(Math.random() * 100);
    console.log(task);
    const yorn = choice();
    if (task % 2 === 0 && yorn === 'yes') {
      console.log('Correct!');
      win += 1;
    }

    if (task % 2 === 1 && yorn === 'no') {
      console.log('Correct!');
      win += 1;
    } else if (task % 2 === 1 && yorn !== 'no') {
      console.log(`'${yorn}' is wrong answer ;(. Correct answer was 'no'`);
      return null;
    }
  }
  Congratulations();
}
game();
