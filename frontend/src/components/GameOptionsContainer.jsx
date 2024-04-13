import { useState } from 'react';
import WordLengthOption from './wordLengthOption';
import AllowDuplicatesOption from './allowDuplicatesOption';

export default function GameOptionsContainer({ onGameOptionsConfigured }) {
  const [wordLengthOptions, setWordLengthOption] = useState([
    {
      label: 4,
      selected: false,
    },
    {
      label: 5,
      selected: false,
    },
    {
      label: 6,
      selected: true,
    },
    {
      label: 7,
      selected: false,
    },
  ]);
  const [allowDuplicatesOptions, setAllowDuplicatesOptions] = useState([
    {
      label: 'yes',
      selected: true,
    },
    {
      label: 'no',
      selected: false,
    },
  ]);

  function updateSelection(array, func, index) {
    const updatedArray = [...array];
    updatedArray.forEach((option, optionIndex) => {
      if (optionIndex == index) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
    func(updatedArray);
  }

  return (
    <div className='options-wrapper'>
      <a className='information-btn' href='/information'>
        information
      </a>
      <a className='highscore-btn' href='/highscore'>
        <span>highscore</span>
      </a>
      <h1>Yet Another Wordle Clone</h1>
      <p className='intro-text'>
        <span>Welcome to my word guessing game!</span> In this game you will try
        to figure out a randomized word by guessing. For each guess you will get
        clues about it's correctness. Your score will depend on the number of
        guesses, time taken and difficulty of the word. Good luck!
      </p>
      <h2 className='options-label'>make a choice</h2>
      <div className='letters-and-duplicates-wrapper'>
        <div className='no-of-letters-wrapper'>
          <p>letters</p>
          {wordLengthOptions.map((option, index) => {
            return (
              <WordLengthOption
                option={option}
                key={index}
                onSelectOption={() => {
                  updateSelection(
                    wordLengthOptions,
                    setWordLengthOption,
                    index
                  );
                }}
              />
            );
          })}
        </div>
        <div className='allow-duplicates-wrapper'>
          {allowDuplicatesOptions.map((option, index) => {
            return (
              <AllowDuplicatesOption
                option={option}
                key={index}
                onSelectOption={() => {
                  updateSelection(
                    allowDuplicatesOptions,
                    setAllowDuplicatesOptions,
                    index
                  );
                }}
              />
            );
          })}
          <p>duplicate letters allowed?</p>
        </div>
      </div>
      <button
        onClick={() => {
          const wordLength = wordLengthOptions.find(
            (option) => option.selected == true
          );
          const duplicatesAllowed = allowDuplicatesOptions.find(
            (option) => option.selected == true
          );
          onGameOptionsConfigured(wordLength, duplicatesAllowed);
        }}
      >
        Let's go!
      </button>
    </div>
  );
}
