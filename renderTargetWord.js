export function renderTargetWord(wordList, wordLength, duplicatesAllowed) {
  try {
    if (wordLength == NaN)
      // This check does not seem to work, need to rework it in the future
      throw 'Error: Word length has to consist of a number';
    if (
      duplicatesAllowed.toUpperCase() !== 'YES' &&
      duplicatesAllowed.toUpperCase() !== 'NO'
    )
      throw 'Error: You have to choose "yes" or "no" in the third argument of renderTargetWord';
  } catch (err) {
    console.log(err);
    return;
  }

  const wordsOfSpecifiedLength = [];
  wordList.forEach((word) => {
    if (word.length == wordLength) {
      wordsOfSpecifiedLength.push(word);
    }
  });
  try {
    if (wordsOfSpecifiedLength.length == 0)
      throw 'Error: There are no words of specified length in your selected word list';
  } catch (err) {
    console.log(err);
    return;
  }

  let criteriaWords = [];
  if (duplicatesAllowed.toUpperCase() == 'YES') {
    criteriaWords = wordsOfSpecifiedLength;
  } else if (duplicatesAllowed.toUpperCase() == 'NO') {
    wordsOfSpecifiedLength.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) !== i) {
          return;
        }
      }
      criteriaWords.push(word);
    });
  }

  const randomisedIndex = Math.floor(Math.random() * criteriaWords.length);
  return criteriaWords[randomisedIndex];
}
