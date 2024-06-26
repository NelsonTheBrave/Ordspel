import { useEffect, useState } from 'react';
import InputBox from './InputBox';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'Å',
  'Ä',
  'Ö',
];

export default function InputRow({ onSubmit, numberOfLetters }) {
  // States
  const initialInputState = [];
  for (let i = 0; i < numberOfLetters; i++) {
    if (i == 0) {
      initialInputState.push({ letter: '', selected: true });
    } else {
      initialInputState.push({ letter: '', selected: false });
    }
  }
  const [letterBoxes, setBoxes] = useState(initialInputState);

  useEffect(() => {
    document.addEventListener('keydown', handleLetterInput);
  }, []);

  function handleLetterInput(event) {
    const pressedKey = event.key.toUpperCase();
    if (pressedKey == 'ENTER') {
      const guessedWord = [];
      letterBoxes.forEach((box) => {
        guessedWord.push(box.letter);
      });
      if (!guessedWord.includes('')) {
        onSubmit(guessedWord.join(''));

        // Här kommer min nödlösning för att tömma input, eftersom jag inte lyckas använda mig av setBoxes() här utan att grejer fuckar up :(
        function clearInput() {
          const moveToEnd = new KeyboardEvent('keydown', {
            key: 'Arrowright',
          });
          for (let i = 0; i < 10; i++) {
            document.dispatchEvent(moveToEnd);
          }
          const deleteLetters = new KeyboardEvent('keydown', {
            key: 'Backspace',
          });
          for (let i = 0; i < 10; i++) {
            document.dispatchEvent(deleteLetters);
          }
        }
        clearInput();
      } else {
        const warningMessage = document.querySelector('.warning-message');
        warningMessage.classList.toggle('open');
        setTimeout(() => {
          warningMessage.classList.toggle('open');
        }, 1000);
      }
    } else if (pressedKey == 'BACKSPACE') {
      const updatedLetterBoxes = [...letterBoxes];
      updatedLetterBoxes.forEach((box, index) => {
        if (box.selected == true) {
          box.letter = '';
          return;
        }
      });
      for (let i = 0; i < updatedLetterBoxes.length; i++) {
        if (updatedLetterBoxes[i].selected == true) {
          if (i > 0) {
            updatedLetterBoxes[i].selected = false;
            updatedLetterBoxes[i - 1].selected = true;
          }
          setBoxes(updatedLetterBoxes);

          return;
        }
      }
    } else if (pressedKey == 'ARROWLEFT') {
      const updatedLetterBoxes = [...letterBoxes];
      for (let i = 0; i < updatedLetterBoxes.length; i++) {
        if (updatedLetterBoxes[i].selected == true) {
          if (i > 0) {
            updatedLetterBoxes[i].selected = false;
            updatedLetterBoxes[i - 1].selected = true;
          }
          setBoxes(updatedLetterBoxes);
          return;
        }
      }
    } else if (pressedKey == 'ARROWRIGHT') {
      const updatedLetterBoxes = [...letterBoxes];
      for (let i = 0; i < updatedLetterBoxes.length; i++) {
        if (updatedLetterBoxes[i].selected == true) {
          if (i < updatedLetterBoxes.length - 1) {
            updatedLetterBoxes[i].selected = false;
            updatedLetterBoxes[i + 1].selected = true;
          }
          setBoxes(updatedLetterBoxes);
          return;
        }
      }
    } else if (alphabet.includes(pressedKey)) {
      const updatedLetterBoxes = [...letterBoxes];
      updatedLetterBoxes.forEach((box) => {
        if (box.selected == true) {
          box.letter = pressedKey;
          return;
        }
      });
      for (let i = 0; i < updatedLetterBoxes.length; i++) {
        if (updatedLetterBoxes[i].selected == true) {
          if (i < updatedLetterBoxes.length - 1) {
            updatedLetterBoxes[i].selected = false;
          }
          if (i < updatedLetterBoxes.length - 1) {
            updatedLetterBoxes[i + 1].selected = true;
          }
          setBoxes(updatedLetterBoxes);

          return;
        }
      }
    }
  }

  return (
    <>
      <div className='input-row'>
        {letterBoxes.map((box, index) => {
          return (
            <InputBox
              key={index}
              box={box}
              onSelectBox={() => {
                const updatedLetterBoxes = [...letterBoxes];
                updatedLetterBoxes.forEach((box, boxIndex) => {
                  if (boxIndex == index) {
                    box.selected = true;
                  } else {
                    box.selected = false;
                  }
                });
                setBoxes(updatedLetterBoxes);
              }}
            />
          );
        })}
      </div>
      <p className='warning-message'>You have to fill all the boxes!</p>
    </>
  );
}
