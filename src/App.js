// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LionUnicornFight from './LionUnicornFight.js';
import OpenClosedSign from './OpenClosedSign.js';
import AnimalParade from './AnimalParade.js';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenZoo() {
    setIsOpen(true);
  }

  function handleClosedZoo() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <LionUnicornFight />
      <OpenClosedSign isOpen={isOpen} />
      <div className="buttons">
        <button onClick={handleOpenZoo}>Open Zoo</button>
        <button onClick={handleClosedZoo}>Close Zoo</button>
      </div>
      <AnimalParade />
    </div>
  );
}

export default App;
