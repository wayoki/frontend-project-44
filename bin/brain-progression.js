#!/usr/bin/env node
import {
  answer, getAnswer, Congratulations, welcome,
} from '../src/cli.js';

function progression() {
  welcome();
  console.log('What number is missing in the progression?');
  let count = 0;
  for (let i = 0; i !== 3; i += 1) {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 10);
    while (randomNumber1 === 0 && randomNumber2 === 0) {
      randomNumber1 += Math.floor(Math.random() * 100);
      randomNumber2 += Math.floor(Math.random() * 10);
    }
    const progressionArr = [randomNumber1];
    let n = 0;
    while (progressionArr.length < 10) {
      progressionArr.push(progressionArr[n] + randomNumber2);
      n += 1;
    }
    const randomNumber3 = Math.floor(Math.random() * 10);
    const result = progressionArr[randomNumber3];
    progressionArr[randomNumber3] = '..';
    console.log(`Question: ${progressionArr.toString().replace(/[\s,%]/g, ' ')}`);
    getAnswer();
    if (Number(answer) === result) {
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
progression();
