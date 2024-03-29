import GuessedCount from './GuessedCount';
import GuessedWord from './GuessedWord';
import InputRow from './InputRow';
import { useEffect, useState } from 'react';
import { renderTargetWord } from '../renderTargetWord';

const wordList = [
  'corn',
  'roar',
  'blue',
  'bulb',
  'creek',
  'found',
  'scrap',
  'sassy',
  'bright',
  'cranky',
  'danced',
  'bitter',
  'swarmed',
  'delight',
  'tonight',
  'pattern',
];

// async function getWordList() {
//   const res = await fetch(
//     'https://github.com/dwyl/english-words/blob/master/words_alpha.txt'
//   );
//   const payload = res.json();
//   console.log('payload :', payload);
// }

// getWordList();

const targetWord = renderTargetWord(wordList, 5, 'yes').toUpperCase();

export default function GamePlayContainer() {
  console.log('targetword: ', targetWord);

  console.log('RENDERING');
  const [madeCorrectGuess, setMadeCorrectGuess] = useState(false);
  const [guessedWords, setGuessedWord] = useState([]);
  console.log('Guessed words from state: ', guessedWords);
  const numberOfGuesses = guessedWords.length;

  return (
    <div className='wrapper'>
      <div className='legend-and-count'>
        <div className='legend'>
          <p className='correct'> Correct</p>
          <p className='misplaced'> Misplaced</p>
          <p className='incorrect'> Incorrect</p>
        </div>
        <GuessedCount numberOfGuesses={numberOfGuesses} />
      </div>
      <h1>Let's go!</h1>
      <p className='start-text'>Start guessing a word</p>
      {guessedWords.map((word, index) => {
        return (
          <GuessedWord
            key={index}
            guessedWord={word}
            targetWord={targetWord}
            onCorrectGuess={() => {
              setMadeCorrectGuess(true);
            }}
          />
        );
      })}
      <>
        {madeCorrectGuess ? (
          <>
            <p className='celebration-message'>CONGRATS! RIGHT WORD</p>
            <br></br>
          </>
        ) : (
          <InputRow
            onSubmit={(newWord) => {
              const inputRow = document.querySelector('.input-row');
              inputRow.classList.toggle('hidden');
              setGuessedWord((oldValue) => [...oldValue, newWord]);
              setTimeout(() => {
                inputRow.classList.toggle('hidden');
              }, 1600);
            }}
          />
        )}
      </>
    </div>
  );
}
