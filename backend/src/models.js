import mongoose, { mongo } from 'mongoose';

const score = mongoose.model('score', { word: String, guesses: Number });
export { mongo };
