#!/usr/bin/env node
import startGame from '../src/startGame.js';
import randomizeGenerator from '../src/randomNumbers.js';

const description = 'What number is missing in the progression?';

const getProgression = (size, startValue, progressionValue) => {
  const arr = [startValue];
  for (let j = 1; j < size; j += 1) {
    arr.push(arr[j - 1] + progressionValue);
  }
  return arr;
};

const getAnswerAndQuestion = () => {
  const minLengthProgression = 5;
  const sizeOfArray = minLengthProgression + randomizeGenerator(0, 6);
  const missingElement = randomizeGenerator(0, sizeOfArray);
  const startNumber = randomizeGenerator(0, 100);
  const progressionMovement = randomizeGenerator(0, 100);

  const array = getProgression(sizeOfArray, startNumber, progressionMovement);

  const question = array[missingElement].toString();
  array[missingElement] = '..';
  const answer = array.join(' ');

  return [answer, question];
};
const brainProgression = () => {
  startGame(description, getAnswerAndQuestion);
};
brainProgression();
