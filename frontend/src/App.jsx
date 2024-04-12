import { useState } from 'react';
import './App.css';
import GamePlayContainer from './components/GamePlayContainer';
import GameOptionsContainer from './components/GameOptionsContainer';

export default function App() {
  const [gameOptions, setGameOptions] = useState({
    configured: false,
    wordLength: 6,
    duplicatesAllowed: 'yes',
    startTime: undefined,
  });
  return (
    <div className='app'>
      {gameOptions.configured ? (
        <GamePlayContainer
          numberOfLetters={gameOptions.wordLength}
          duplicateChoice={gameOptions.duplicatesAllowed}
          startTime={gameOptions.startTime}
        />
      ) : (
        <GameOptionsContainer
          onGameOptionsConfigured={(wordLength, duplicatesAllowed) => {
            setGameOptions({
              configured: true,
              wordLength: wordLength.label,
              duplicatesAllowed: duplicatesAllowed.label,
              startTime: new Date(),
            });
            // Servern startar tidtagning?
          }}
        />
      )}
    </div>
  );
}
