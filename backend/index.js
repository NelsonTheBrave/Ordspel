import express from 'express';
import fs from 'fs/promises';
import { renderTargetWord } from './renderTargetWord.js';
import {
  wordListEnglish,
  wordListSpanish,
  wordListSwedish,
} from './wordList.js';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get('/', async (req, res) => {
  const html = await fs.readFile('../frontend/dist/index.html');
  res.type('html').send(html);
});
app.use('/assets', express.static('../frontend/dist/assets'));
app.get('/api/wordList', async (req, res) => {
  const word = await renderTargetWord(
    wordListEnglish,
    Number(req.query.numberOfLetters),
    req.query.duplicate
  );
  res.send({ targetWord: word });
});
app.post('/api/score', (req, res) => {
  console.log(req.body);
  console.log(req.body.score);

  // app.post('/test', (req, res) => {
  //   res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
  // })
});

app.listen(5080);
