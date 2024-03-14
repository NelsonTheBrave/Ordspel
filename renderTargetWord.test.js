import { renderTargetWord } from './renderTargetWord';

describe('renderTargetWord()', () => {
  // Försökte skapa ett så enkelt första test enligt samma tankegång som för algoritm A, där outputen i testade funktionen mer eller mindre kan hårdkodas för att testet ska passera
  it('returns a four letter word with non-duplicate letters from a specified list that only contains that four letter word', () => {
    const wordList = ['corn'];
    const output = renderTargetWord(wordList, 4, 'yes');
    expect(output).toStrictEqual('corn');
  });

  // I nästa steg kräver testet att ETT ord från den specificerade listan skall väljas ut och returneras, vilket skall ske slumpmässigt. Dock kontrollerar inte detta test för huruvida det är slumpmässigt eller ej...
  it('returns a random word from a list containing only four letter non-duplicate words', () => {
    const wordList = ['corn', 'sand', 'blue', 'gold', 'nice'];
    const output = renderTargetWord(wordList, 4, 'yes');
    expect(output).toHaveLength(4);
    expect(wordList).toContain(output);
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
    const output = renderTargetWord(wordList, 6, 'yes');
    expect(output).toHaveLength(6);
    expect(wordList).toContain(output);
  });

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
    const output = renderTargetWord(wordList, 7, 'no');
    const wordsMatchingCriteria = ['swarmed', 'delight'];
    expect(output).toHaveLength(7);
    expect(wordsMatchingCriteria).toContain(output);
  });
});
