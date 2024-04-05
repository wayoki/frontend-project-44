#!/usr/bin/env node
import startGame from '../src/startGame.js';
import { getProgression, getAnswerAndQuestionBp } from '../src/games.js';

const description = 'What number is missing in the progression?';

getProgression();
getAnswerAndQuestionBp();
startGame(description, getAnswerAndQuestionBp);
