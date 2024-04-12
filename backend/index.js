import express from 'express';
import expressHandlebars from 'express-handlebars';

import { renderTargetWord } from './renderTargetWord.js';
import {
  wordListEnglish,
  wordListSpanish,
  wordListSwedish,
} from './wordList.js';
import mongoose from 'mongoose';
import { HighscoreModel } from './src/models.js';

async function sortHighscore(loadedScores) {
  const sortedScores = loadedScores.sort((a, b) => b.points - a.points);
  return sortedScores;
}

const app = express();
app.use(express.json());
mongoose.connect(process.env.DB_URL);
app.engine('handlebars', expressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', async (req, res) => {
  res.status(200).render('index');
});
app.get('/information', async (req, res) => {
  res.status(200).render('information');
});

app.get('/highscore', async (req, res) => {
  let loadedScores = [];
  if (req.query.numberOfLetters) {
    loadedScores = await HighscoreModel.find({
      targetWordLength: +req.query.numberOfLetters,
    }).lean();
  } else {
    loadedScores = await HighscoreModel.find().lean();
  }
  const sortedScores = await sortHighscore(loadedScores);
  res.status(200).render('highscore', {
    highscore: sortedScores,
  });
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

app.use('/assets', express.static('./frontend/dist/assets'));
// app.use('/src', express.static('../frontend/src'));

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

app.listen(process.env.PORT || 5080);
