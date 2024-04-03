export function evaluateGuess(guessedWord, targetWord) {
  const output = [];
  for (let i = 0; i < guessedWord.length; i++) {
    output.push('');
  }
  checkForCorrect();
  checkForMisplaced();
  markIncorrect();

  function checkForCorrect() {
    for (let i = 0; i < guessedWord.length; i++) {
      const guessedLetter = guessedWord.charAt(i);
      const targetLetter = targetWord.charAt(i);
      if (guessedLetter == targetLetter) {
        output[i] = { letter: guessedLetter, result: 'correct' };
        updateGuessedWord(i);
        updateTargetWord(i);
      }
    }
  }
  function checkForMisplaced() {
    for (let i = 0; i < guessedWord.length; i++) {
      const guessedLetter = guessedWord.charAt(i);
      for (let j = 0; j < targetWord.length; j++) {
        if (guessedLetter == targetWord.charAt(j)) {
          output[i] = { letter: guessedLetter, result: 'misplaced' };
          updateGuessedWord(i);
          updateTargetWord(j);
        }
      }
    }
  }
  function markIncorrect() {
    for (let i = 0; i < guessedWord.length; i++) {
      const guessedLetter = guessedWord.charAt(i);
      if (guessedLetter != '!') {
        output[i] = { letter: guessedLetter, result: 'incorrect' };
      }
    }
  }
  function updateGuessedWord(index) {
    guessedWord = guessedWord.split('');
    guessedWord.splice(index, 1, '!');
    guessedWord = guessedWord.join('');
  }
  function updateTargetWord(index) {
    targetWord = targetWord.split('');
    targetWord.splice(index, 1, '?');
    targetWord = targetWord.join('');
  }
  console.log(output);
  return output;
}

// evaluateGuess('a', 'a');

/* 
DEFINIERA



SEPARERA
- loopa igenom gissade ordet bokstav för bokstav
- jämföra bokstav på nuvarande position mellan bägge ord, se om den är korrekt eller ej
- om ej korrekt, jämföra bokstav på nuvarande position i första ord med övriga bokstäver i andra ordet
- skapa en array med ett objekt för varje bokstav i gissade ordet, där "result" är en variabel som beror på ovanstående jämförelser 


EXPERIMENTERA



KOMBINERA




*/
