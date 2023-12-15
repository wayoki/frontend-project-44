#!/usr/bin/env node
import { Congratulations, welcome } from "../src/callback.js";
import { answer, getAnswer } from "../src/cli.js";
function calc() {
  welcome();
  let count = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i !== 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const sign = ['+', '-', '*'];
    const randomSign = sign[Math.floor(Math.random() * 3)];
    let result = 0;
    console.log(`Question: ${randomNumber1} ${randomSign} ${randomNumber2}`);
    getAnswer();
    if (randomSign === sign[0]) {
      result = randomNumber1 + randomNumber2; 
    }
    else if (randomSign === sign[1]) {
      result = randomNumber1 - randomNumber2;
    }
    else if (randomSign === sign[2]) {
      result = randomNumber1 * randomNumber2;
    }
    if (Number(answer) === result) {
      console.log('Correct!');
      count += 1;
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      break
    }
  }
  if (count === 3) {
  Congratulations();
  }
}
calc()
