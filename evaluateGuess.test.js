import { evaluateGuess } from './evaluateGuess';

describe('Ordspel', () => {
  // Skapade ett initiellt test som var så simpelt som jag kunde tänka mig och ändå skulle passera när hela funktionaliteten så småningom var på plats, dvs den returnerar en array med objekt som är beroende av inputen. I detta stadie skedde ingen jämförelse av de två strängarna i min metod, utan jag hade hårdkodat output som en array med letter: input och result: "correct". Efter tips från Richard (dig) insåg jag att ett ännu simplare test vore att testa om en tom input resulterade i en tom array.
  it('takes two identical one letter inputs and returns an array with an object including the letter and the result: "correct"', () => {
    const output = evaluateGuess('a', 'a');
    expect(output).toStrictEqual([{ letter: 'a', result: 'correct' }]);
  });

  it('compares two non-identical one-letter-words and returns result: "incorrect" in object', () => {
    const output = evaluateGuess('a', 'b');
    expect(output).toStrictEqual([{ letter: 'a', result: 'incorrect' }]);
  });

  // Nästa test gick längre genom att inkludera ett obestämt antal objekt i output, vilket jag löste genom att loopa igenom strängen bokstav för bokstav. Men result var fortfarande hårdkodat till korrekt.
  it('compares two identical inputs and returns an array with objects, one for each letter, with the result "correct" for each letter', () => {
    const output = evaluateGuess('chess', 'chess');
    expect(output).toStrictEqual([
      { letter: 'c', result: 'correct' },
      { letter: 'h', result: 'correct' },
      { letter: 'e', result: 'correct' },
      { letter: 's', result: 'correct' },
      { letter: 's', result: 'correct' },
    ]);
  });

  // Detta test krävde att orden faktiskt jämfördes med varandra, även om "misplaced" inte togs in i detta test för att hålla det så enkelt som möjligt. Därmed fick testorden inte innehålla bokstäver som i den färdiga funktionen borde ge "misplaced".
  it('compares two non-identical letter inputs (that do NOT have same letters in different positions) and returns an array objects, one for each letter, with the result "correct" if the letters at the current position match, or "incorrect" if they do not', () => {
    const output = evaluateGuess('chess', 'crept');
    expect(output).toStrictEqual([
      { letter: 'c', result: 'correct' },
      { letter: 'h', result: 'incorrect' },
      { letter: 'e', result: 'correct' },
      { letter: 's', result: 'incorrect' },
      { letter: 's', result: 'incorrect' },
    ]);
  });

  // Till sist adderade jag ett test som även tog hänsyn till rätt bokstav på fel plats, dvs "misplaced". Därmed var alla villkor fyllda.
  it('compares two words with same length and returns an array with one object for each letter of the first word, where it gives one of three results: "correct" (same letter in same position in both words), "incorrect" (letter does not exist in the second word at all), or "misplaced" (letter exists in second word but not in that current position', () => {
    const output = evaluateGuess('chestnut', 'trashing');
    expect(output).toStrictEqual([
      { letter: 'c', result: 'incorrect' },
      { letter: 'h', result: 'misplaced' },
      { letter: 'e', result: 'incorrect' },
      { letter: 's', result: 'correct' },
      { letter: 't', result: 'misplaced' },
      { letter: 'n', result: 'misplaced' },
      { letter: 'u', result: 'incorrect' },
      { letter: 't', result: 'incorrect' },
    ]);
  });
  it("trying my algorithm with Richard's example test", () => {
    const output = evaluateGuess('hallå', 'cykla');
    expect(output).toStrictEqual([
      { letter: 'h', result: 'incorrect' },
      { letter: 'a', result: 'misplaced' },
      { letter: 'l', result: 'incorrect' },
      { letter: 'l', result: 'correct' },
      { letter: 'å', result: 'incorrect' },
    ]);
  });
});

/* 
FRÅGOR
- Varför måste jag ha toStrictEqual? 
- Hur kollar man något som skall ge random resultat? Köra testet flera gånger och att det måste bli olika?
- Bra att kolla ett par olika varianter av samma funktionalitet? T.ex. att plocka ut ord med 5 bokstäver, och sedan med 6 bokstäver? Hur långt vill man gå i detta?
*/
