import randomizeGenerator from './randomNumbers.js';

const isEven = (number) => number % 2 === 0;

const result = (num1, num2, getRandomExample) => {
  let expression = 0;
  switch (getRandomExample) {
    case '+':
      expression = num1 + num2;
      break;
    case '-':
      expression = num1 - num2;
      break;
    case '*':
      expression = num1 * num2;
      break;
    default:
  }
  return expression;
};

const sign = ['+', '-', '*'];

const getAnswerAndQuestionBC = () => {
  const getRandomExample = sign[Math.floor(Math.random() * sign.length)];
  const num1 = randomizeGenerator(1, 10);
  const num2 = randomizeGenerator(1, 10);
  const question = `${num1} ${getRandomExample} ${num2}`;
  const rightAnswer = String(result(num1, num2, getRandomExample));
  return [question, rightAnswer];
};

const getAnswerAndQuestionBE = () => {
  const question = randomizeGenerator(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const getAnswerAndQuestionBG = () => {
  const num1 = randomizeGenerator() + 1;
  const num2 = randomizeGenerator() + 1;
  const question = `${num1} ${num2}`;
  let rightAnswer = '';
  for (let i = Math.min(num1, num2); i >= 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      rightAnswer = String(i);
      break;
    }
  }
  return [question, rightAnswer];
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQuestionBP = () => {
  const num = randomizeGenerator(2, 200);
  const question = `${num}`;

  const answerTrue = isPrime(num) ? 'yes' : 'no';

  return [question, answerTrue];
};

const getProgression = (size, startValue, progressionValue) => {
  const arr = [startValue];
  for (let j = 1; j < size; j += 1) {
    arr.push(arr[j - 1] + progressionValue);
  }
  return arr;
};

const getAnswerAndQuestionBp = () => {
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

export {
  result,
  sign,
  isEven,
  getAnswerAndQuestionBC,
  getAnswerAndQuestionBE,
  getAnswerAndQuestionBG,
  isPrime,
  getAnswerAndQuestionBP,
  getProgression,
  getAnswerAndQuestionBp,
};
