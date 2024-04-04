import { useState } from 'react';
import './App.css';
import GamePlayContainer from './components/GamePlayContainer';
import GameOptionsContainer from './components/GameOptionsContainer';

export default function App() {
  const [gameOptionsConfigured, setGameOptionsConfigured] = useState(false);
  return (
    <div className='app'>
      {gameOptionsConfigured ? (
        <GamePlayContainer />
      ) : (
        <GameOptionsContainer
          onGameOptionsConfigured={() => {
            setGameOptionsConfigured(true);
          }}
        />
      )}
    </div>
  );
}
