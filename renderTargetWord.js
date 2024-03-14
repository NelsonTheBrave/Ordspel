export function renderTargetWord(wordList, wordLength, duplicatesAllowed) {
  const wordsOfSpecifiedLength = [];
  wordList.forEach((word) => {
    if (word.length == wordLength) {
      wordsOfSpecifiedLength.push(word);
    }
  });
  wordsOfSpecifiedLength.forEach((word) => {});
  const randomisedIndex = Math.floor(
    Math.random() * wordsOfSpecifiedLength.length
  );
  return wordsOfSpecifiedLength[randomisedIndex];
}
