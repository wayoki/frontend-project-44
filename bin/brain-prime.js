#!/usr/bin/env node
import {
  answer, getAnswer, Congratulations, welcome,
} from '../src/cli.js';

function prime() {
  welcome();
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i !== 3; i += 1) {
    let randomNumber = Math.floor(Math.random() * 100);
    while (randomNumber === 0 && randomNumber === 1) {
      randomNumber += Math.floor(Math.random() * 100);
    }
    let result;
    for (let n = 2; n < randomNumber; n += 1) {
      if (randomNumber % n === 0) {
        result = 'no';
        break;
      } else {
        result = 'yes';
      }
    }
    console.log(`Question: ${randomNumber}`);
    getAnswer();
    if (answer === result) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      break;
    }
  }
  if (count === 3) {
    Congratulations();
  }
}
prime();
