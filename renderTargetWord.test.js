import { renderTargetWord } from './renderTargetWord';

describe('renderTargetWord()', () => {
  // Försökte skapa ett så enkelt första test enligt samma tankegång som för algoritm A, där outputen i testade funktionen mer eller mindre kan hårdkodas för att testet ska passera
  it('returns a four letter word with non-duplicate letters from a specified list that only contains that four letter word', () => {
    const wordList = ['corn'];
    const output = renderTargetWord(wordList, 4, 'yes');
    expect(output).toStrictEqual('corn');
  });

  // I nästa steg kräver testet att ETT ord från den specificerade listan skall väljas ut och returneras, vilket skall ske slumpmässigt. Den testade funktionen körs 6 ggr för att kontrollera att det inte är samma ord som returneras varje gång. Testet kan inte garantera att resultatet är helt statistiskt slumpmässigt men kan ses som en indikation på att det antagligen är det.
  it('returns a random word from a list containing only four letter non-duplicate words', () => {
    const wordList = ['corn', 'sand', 'blue', 'gold', 'nice'];
    const accumulatedOutputs = [];

    for (let i = 0; i < 6; i++) {
      const output = renderTargetWord(wordList, 4, 'yes');
      expect(output).toHaveLength(4);
      expect(wordList).toContain(output);
      accumulatedOutputs.push(output);
    }
    const allEqual = accumulatedOutputs.every(
      (word) => word === accumulatedOutputs[0]
    );
    expect(allEqual).toBe(false);
  });

  // I detta test lägger jag till att man kan välja hur långt ett ord ska vara, vilket kändes som ett lagom stort nästa steg
  it('returns a random word that corresponds to the specified number of letters, from a list containing different non-duplicate words of varying length', () => {
    const wordList = [
      'corn',
      'sand',
      'blue',
      'creak',
      'found',
      'scrap',
      'bright',
      'cranky',
      'dancer',
      'swarmed',
      'delight',
      'blasted',
    ];
    const accumulatedOutputs = [];

    for (let i = 0; i < 6; i++) {
      const output = renderTargetWord(wordList, 6, 'yes');
      expect(output).toHaveLength(6);
      expect(wordList).toContain(output);
      accumulatedOutputs.push(output);
    }
    const allEqual = accumulatedOutputs.every(
      (word) => word === accumulatedOutputs[0]
    );
    expect(allEqual).toBe(false);
  });

  // Detta test inkluderar även det sista kriteriet. Jag ändrade orden i wordList nedan för att inkludera både ord med dublett-bokstäver och ej, för varje ordlängd.
  it('returns a random word from a word list, with matching number of letters, that also matches the criteria for duplicate or non-duplicate letters', () => {
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

    const accumulatedOutputs = [];
    const wordsMatchingCriteria = ['swarmed', 'delight'];

    for (let i = 0; i < 6; i++) {
      const output = renderTargetWord(wordList, 7, 'no');
      expect(output).toHaveLength(7);
      expect(wordsMatchingCriteria).toContain(output);
      accumulatedOutputs.push(output);
    }
    const allEqual = accumulatedOutputs.every(
      (word) => word === accumulatedOutputs[0]
    );
    expect(allEqual).toBe(false);
  });

  // Nedan är ett ofärdigt försök att testa för om algoritmen ger ett error om den matas in med felaktiga parametrar, vilket jag eventuellt kan jobba vidare med sen.
  /*  
  it('returns a throw if arguments for the function are invalid', () => {
    const wordList = ['corn', 'roar', 'blue', 'bulb'];
    const output = renderTargetWord(wordList, 8, 'yes');
    expect(output).toThrow();
  }); */
});
