export function evaluateGuess(guessedWord, targetWord) {
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
            return 'misplaced';
          }
        }
      }
      return 'incorrect';
    }

    const letterObject = { letter: guessedLetter, result: result };
    output.push(letterObject);
  }
  return output;
}

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
