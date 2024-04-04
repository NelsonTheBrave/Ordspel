import express from 'express';
import { renderTargetWord } from './renderTargetWord.js';
import {
  wordListEnglish,
  wordListSpanish,
  wordListSwedish,
} from './wordList.js';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get('/', (req, res) => {
  res.send('Yo mama!');
});
app.get('/api/wordList', async (req, res) => {
  const word = await renderTargetWord(
    wordListEnglish,
    Number(req.query.numberOfLetters),
    req.query.duplicate
  );
  res.send({ targetWord: word });
});

app.listen(5080);
