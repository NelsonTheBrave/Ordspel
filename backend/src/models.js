import mongoose from 'mongoose';

const HighscoreModel = mongoose.model(
  'highscore',
  {
    targetWord: String,
    guessedWords: Array,
    numberOfGuesses: Number,
    timeTaken: Number,
    gameOptions: Array,
    playerName: String,
    points: Number,
    targetWordLength: Number,
  },
  'highscore'
);
export { HighscoreModel };
