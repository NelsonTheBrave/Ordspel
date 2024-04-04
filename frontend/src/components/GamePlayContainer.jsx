import GuessedCount from './GuessedCount';
import GuessedWord from './GuessedWord';
import InputRow from './InputRow';
import { useEffect, useState } from 'react';
// import { renderTargetWord } from '../renderTargetWord';
// import { wordListEnglish, wordListSpanish, wordListSwedish } from '../wordList';

export default function GamePlayContainer() {
  const numberOfLetters = 6;
  const duplicateChoice = 'yes';
  const [madeCorrectGuess, setMadeCorrectGuess] = useState(false);
  const [guessedWords, setGuessedWord] = useState([]);
  const [targetWord, setTargetWord] = useState();
  const numberOfGuesses = guessedWords.length;
  useEffect(() => {
    async function loadWordList() {
      const res = await fetch(
        `/api/wordList?numberOfLetters=${numberOfLetters}&duplicate=${duplicateChoice}`
      );
      const payload = await res.json();
      setTargetWord(payload.targetWord);
    }
    loadWordList();
  }, []);
  console.log('target word: ', targetWord);
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

              async function postScore() {
                const data = {
                  score: `You tried ${numberOfGuesses} times to guess for ${word}`,
                };
                await fetch('/api/score', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });
              }
              postScore();
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
            numberOfLetters={numberOfLetters}
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
