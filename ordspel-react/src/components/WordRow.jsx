import { useEffect, useState } from 'react';
import WordBox from './WordBox';

let counter = 0;
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

// document.addEventListener('keydown', (event) => {
//   const pressedKey = event.key.toUpperCase();
//   console.log(pressedKey);

//   if (alphabet.includes(pressedKey)) {
//   const updatedLetterBoxes = [];
//   letterBoxes.forEach((box) => {
// updatedLetterBoxes.push(box);
// //   });
//   console.log('letterBoxes after keydown: ', letterBoxes);
//   console.log('updatedLetterBoxes after keydown: ', updatedLetterBoxes);
//   updatedLetterBoxes.forEach((box, index) => {
//     box.letter = 'T';
//   });
//   }
// });

export default function WordRow() {
  const [letterBoxes, setBoxes] = useState([
    {
      letter: '',
      selected: true,
    },
    {
      letter: '',
      selected: false,
    },
    {
      letter: '',
      selected: false,
    },
    {
      letter: '',
      selected: false,
    },
    {
      letter: '',
      selected: false,
    },
  ]);

  useEffect(() => {
    document.addEventListener('keydown', handleLetterInput);
    console.log('useEffect executed');
  }, []);

  console.log('letterBoxes before keydown', letterBoxes);
  counter++;
  console.log('amount of times rendered: ', counter);

  function handleLetterInput(event) {
    const pressedKey = event.key.toUpperCase();

    if (alphabet.includes(pressedKey)) {
      const updatedLetterBoxes = [...letterBoxes];
      updatedLetterBoxes.forEach((box) => {
        if (box.selected == true) {
          box.letter = pressedKey;
          return;
        }
      });
      for (let i = 0; i < updatedLetterBoxes.length; i++) {
        console.log(updatedLetterBoxes[i].selected);
        if (updatedLetterBoxes[i].selected == true) {
          updatedLetterBoxes[i].selected = false;
          if (i <= updatedLetterBoxes.length - 2) {
            updatedLetterBoxes[i + 1].selected = true;
          } else {
            updatedLetterBoxes[0].selected = true;
          }
          setBoxes(updatedLetterBoxes);
          return;
        }
      }
    }
  }

  return (
    <div className='wordRow'>
      {letterBoxes.map((box, index) => {
        return (
          <WordBox
            key={index}
            box={box}
            selectBox={() => {
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
  );
}
