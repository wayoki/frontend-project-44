#!/usr/bin/env node
import startGame from '../src/startGame.js';
import { isEven, getAnswerAndQuestionBE } from '../src/games.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

isEven();
getAnswerAndQuestionBE();
startGame(description, getAnswerAndQuestionBE);
