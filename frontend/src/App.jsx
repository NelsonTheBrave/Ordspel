import { useState } from 'react';
import './App.css';
import GamePlayContainer from './components/GamePlayContainer';
import GameOptionsContainer from './components/GameOptionsContainer';

export default function App() {
  const [gameOptions, setGameOptions] = useState({
    configured: false,
    wordLength: 6,
    duplicatesAllowed: 'yes',
  });
  return (
    <div className='app'>
      {gameOptions.configured ? (
        <GamePlayContainer
          numberOfLetters={gameOptions.wordLength}
          duplicateChoice={gameOptions.duplicatesAllowed}
        />
      ) : (
        <GameOptionsContainer
          onGameOptionsConfigured={(wordLength, duplicatesAllowed) => {
            console.log(
              'wordlength: ',
              wordLength,
              'duplicates allowed? ',
              duplicatesAllowed
            );
            setGameOptions({
              configured: true,
              wordLength: 4,
              duplicatesAllowed: 'yes',
            });
          }}
        />
      )}
    </div>
  );
}
