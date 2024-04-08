import mongoose from 'mongoose';

const HighscoreModel = mongoose.model(
  'highscore',
  {
    word: String,
    attempts: Number,
  },
  'highscore'
);
export { HighscoreModel };
