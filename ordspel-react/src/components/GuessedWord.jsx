export default function GuessedWord({
  guessedWord,
  targetWord,
  onCorrectGuess,
}) {
  function evaluateGuess(guessedWord, targetWord) {
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
    // if (
    //   !output.filter((letter) => {
    //     letter.result == 'incorrect';
    //   }) &&
    //   !output.filter((letter) => {
    //     letter.result == 'misplaced';
    //   })
    // ) {
    //   console.log('WOOOW');
    //   window.alert('You got it!');
    // }
    // console.log(
    //   !output.filter((letter) => {
    //     letter.result == 'incorrect';
    //   })
    // );

    let rightGuessCount = 0;
    for (let k = 0; k < output.length; k++) {
      if (output[k].result == 'correct') {
        rightGuessCount++;
      }
    }
    return { Output: output, RightGuessCount: rightGuessCount };
  }
  const evaluatedGuess = evaluateGuess(guessedWord, targetWord);

  if (evaluatedGuess.RightGuessCount == targetWord.length) {
    onCorrectGuess();
  }
  return (
    <>
      <div className='guessed-word'>
        <p className={evaluatedGuess.Output[0].result}>
          {evaluatedGuess.Output[0].letter}
        </p>
        <p className={evaluatedGuess.Output[1].result}>
          {evaluatedGuess.Output[1].letter}
        </p>
        <p className={evaluatedGuess.Output[2].result}>
          {evaluatedGuess.Output[2].letter}
        </p>
        <p className={evaluatedGuess.Output[3].result}>
          {evaluatedGuess.Output[3].letter}
        </p>
        <p className={evaluatedGuess.Output[4].result}>
          {evaluatedGuess.Output[4].letter}
        </p>
      </div>
    </>
  );
}
