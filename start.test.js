import { evaluateGuess } from './start';

describe('Ordspel', () => {
  it('takes two identical one letter inputs and returns an array with an object including the letter and the result: "correct"', () => {
    const output = evaluateGuess('a', 'a');
    expect(output).toStrictEqual([{ letter: 'a', result: 'correct' }]);
  });

  it('compares two non-identical one-letter-words and returns result: "incorrect" in object', () => {
    const output = evaluateGuess('a', 'b');
    expect(output).toStrictEqual([{ letter: 'a', result: 'incorrect' }]);
  });

  it('compares two identical five letter inputs and returns an array with five objects, one for each letter, with the result "correct" for each letter', () => {
    const output = evaluateGuess('chess', 'chess');
    expect(output).toStrictEqual([
      { letter: 'c', result: 'correct' },
      { letter: 'h', result: 'correct' },
      { letter: 'e', result: 'correct' },
      { letter: 's', result: 'correct' },
      { letter: 's', result: 'correct' },
    ]);
  });

  it('compares two non-identical five letter inputs (that do NOT have same letters in different positions) and returns an array with five objects, one for each letter, with the result "correct" if the letters at the current position match, or "incorrect" if they do not', () => {
    const output = evaluateGuess('chess', 'crept');
    expect(output).toStrictEqual([
      { letter: 'c', result: 'correct' },
      { letter: 'h', result: 'incorrect' },
      { letter: 'e', result: 'correct' },
      { letter: 's', result: 'incorrect' },
      { letter: 's', result: 'incorrect' },
    ]);
  });

  it('compares two words with same length and returns an array with one object for each letter of the first word, where it gives one of three results: "correct" (same letter in same position in both words), "incorrect" (letter does not exist in the second word at all), or "misplaced" (letter exists in second word but not in that current position', () => {
    const output = evaluateGuess('chestnut', 'smashing');
    expect(output).toStrictEqual([
      { letter: 'c', result: 'incorrect' },
      { letter: 'h', result: 'misplaced' },
      { letter: 'e', result: 'incorrect' },
      { letter: 's', result: 'correct' },
      { letter: 't', result: 'incorrect' },
      { letter: 'n', result: 'misplaced' },
      { letter: 'u', result: 'incorrect' },
      { letter: 't', result: 'incorrect' },
    ]);
  });
});

/* 
FRÅGOR
- Varför måste jag ha toStrictEqual? 
-
- Hur börjar man egentligen ett test till en sådan här? 
-
-




*/
