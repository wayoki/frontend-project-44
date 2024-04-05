#!/usr/bin/env node
import startGame from '../src/startGame.js';
import { isPrime, getAnswerAndQuestionBP } from '../src/games.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

isPrime();
getAnswerAndQuestionBP();
startGame(description, getAnswerAndQuestionBP);
