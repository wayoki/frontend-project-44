#!/usr/bin/env node
import startGame from '../src/startGame.js';
import { getAnswerAndQuestionBG } from '../src/games.js';

const description = 'Find the greatest common divisor of given numbers.';
getAnswerAndQuestionBG();
startGame(description, getAnswerAndQuestionBG);
