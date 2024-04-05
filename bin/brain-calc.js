#!/usr/bin/env node
import startGame from '../src/startGame.js';
import { getAnswerAndQuestionBC } from '../src/games.js';

const description = 'What is the result of the expression?';

getAnswerAndQuestionBC();
startGame(description, getAnswerAndQuestionBC);
