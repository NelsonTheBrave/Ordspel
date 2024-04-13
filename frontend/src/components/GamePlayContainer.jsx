import GameOver from './GameOver';
import GuessedCount from './GuessedCount';
import GuessedWord from './GuessedWord';
import InputRow from './InputRow';
import { useEffect, useState } from 'react';
// import { renderTargetWord } from '../renderTargetWord';
// import { wordListEnglish, wordListSpanish, wordListSwedish } from '../wordList';

export default function GamePlayContainer({
  numberOfLetters,
  duplicateChoice,
  startTime,
}) {
  // States
  const [madeCorrectGuess, setMadeCorrectGuess] = useState(false);
  const [guessedWords, setGuessedWord] = useState([]);
  const [targetWord, setTargetWord] = useState();
  const numberOfGuesses = guessedWords.length;

  // Results
  const results = {
    targetWord: targetWord,
    guessedWords: guessedWords,
    numberOfGuesses: numberOfGuesses,
    timeTaken: Math.ceil((new Date() - startTime) / 100) / 10,
    gameOptions: [numberOfLetters, duplicateChoice],
  };

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

  return (
    <div className='gameplay-wrapper'>
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
              setTimeout(() => {
                setMadeCorrectGuess(true);
                // window.scrollTo(0, document.body.scrollHeight); // For auto scrolling to results
              }, 1300);
            }}
          />
        );
      })}
      <>
        {madeCorrectGuess ? (
          <GameOver results={results} />
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
