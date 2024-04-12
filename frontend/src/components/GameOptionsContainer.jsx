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
      <h2>
        Let's play some <span>YAWC</span>
      </h2>
      <h3>Before you start, choose your type of game from the options below</h3>
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
          <p>duplicate letters</p>
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
