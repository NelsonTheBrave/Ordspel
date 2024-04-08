import express from 'express';
import expressHandlebars from 'express-handlebars';
import fs from 'fs/promises';

import { renderTargetWord } from './renderTargetWord.js';
import {
  wordListEnglish,
  wordListSpanish,
  wordListSwedish,
} from './wordList.js';
import mongoose from 'mongoose';
import { HighscoreModel } from './src/models.js';

const app = express();
app.use(express.json());
mongoose.connect(
  'mongodb+srv://NelsonTheBrave:!PASS-mongo@cluster0.cqjff7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);
// mongoose.connect(process.env.DB_URL);

app.engine('handlebars', expressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', '../frontend/templates');

// app.get('/', async (req, res) => {
//   const html = await fs.readFile('../frontend/dist/index.html');
//   res.type('html').send(html);
// });

app.get('/', async (req, res) => {
  res.status(200).render('index');
});
app.get('/highscore', async (req, res) => {
  res.status(200).render('highscore');
});

app.get('/api/highscore', async (req, res) => {
  const scores = await HighscoreModel.find();
  res.json(scores);
});

app.post('/api/highscore', async (req, res) => {
  const newScore = req.body;
  console.log(req.body);
  const itemModel = new HighscoreModel(newScore);
  await itemModel.save();
  res.status(201).json(newScore);
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
});

app.listen(5080);
