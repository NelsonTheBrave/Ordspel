import { evaluateGuess } from '../evaluateGuess';

export default function GuessedWord({
  guessedWord,
  targetWord,
  onCorrectGuess,
}) {
  /*  function evaluateGuess(guessedWord, targetWord) {
    const output = [];
    for (let i = 0; i < guessedWord.length; i++) {
      const guessedLetter = guessedWord.charAt(i);
      const targetLetter = targetWord.charAt(i);
      const result = matchingStatus();

      function matchingStatus() {
        if (guessedLetter == targetLetter) {
          return 'correct';
        } else {
          for (let j = 0; j < targetWord.length; j++) {
            if (guessedLetter == targetWord.charAt(j)) {
              targetWord = targetWord.replace(targetWord.charAt(j), '?'); // "raderar" bokstaven från mål-ordet så att samma bokstav inte kan resultera i "misplaced" fler än en gång
              return 'misplaced';
            }
          }
        }
        return 'incorrect';
      }

      const letterObject = { letter: guessedLetter, result: result };
      output.push(letterObject);
    }


  } */

  const evaluatedGuess = evaluateGuess(guessedWord, targetWord);

  if (evaluatedGuess.RightGuessCount == targetWord.length) {
    onCorrectGuess();
  }
  return (
    <div className='guessed-word'>
      {evaluatedGuess.Output.map((box, index) => {
        return (
          <p key={index} className={box.result}>
            {box.letter}
          </p>
        );
      })}
    </div>
  );
}
