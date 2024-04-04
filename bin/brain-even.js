#!/usr/bin/env node
import randomizeGenerator from '../src/randomNumbers.js';
import startGame from '../src/startGame.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = randomizeGenerator(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEven = () => {
  startGame(description, getAnswerAndQuestion);
};
brainEven();
