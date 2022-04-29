// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FlowerGirlBearFight from './FlowerGirlBearFight.js';
import OpenClosedSign from './OpenClosedSign.js';
import MidsummerParade from './MidsummerParade.js';

function App() {
  const ATTACK_MODIFIER = 0.5;
  const [isOpen, setIsOpen] = useState(false);
  const [flowerGirlSize, setFlowerGirlSize] = useState(3);
  const [bearSize, setBearSize] = useState(3);
  const [members, setMembers] = useState([]);

  function handleOpenFestival() {
    setIsOpen(true);
  }

  function handleClosedFestival() {
    setIsOpen(false);
  }

  function handleFlowerGirl() {
    members.push('flower girl');

    setMembers([...members]);
  }
  function handleBear() {
    members.push('bear');

    setMembers([...members]);
  }
  function handleFairy() {
    members.push('fairy');

    setMembers([...members]);
  }
  function handleMermaid() {
    members.push('mermaid');

    setMembers([...members]);
  }

  function handleRemove() {
    members.pop();

    setMembers([...members]);
  }

  return (
    <div className="App">
      <FlowerGirlBearFight className="fight" flowerGirlSize={flowerGirlSize} bearSize={bearSize} />
      <div className="fight-buttons">
        <button onClick={() => setFlowerGirlSize(flowerGirlSize + ATTACK_MODIFIER)}>
          Drink Mushroom Tea
        </button>
        <button onClick={() => setBearSize(bearSize - ATTACK_MODIFIER)}>Attack the bear!</button>
        <button onClick={() => setBearSize(bearSize + ATTACK_MODIFIER)}>Eat Some Berries</button>
        <button onClick={() => setFlowerGirlSize(flowerGirlSize - ATTACK_MODIFIER)}>
          Roar at Flower Girl!
        </button>
      </div>
      <OpenClosedSign isOpen={isOpen} />
      <div className="buttons">
        <button onClick={handleOpenFestival}>Open Zoo</button>
        <button onClick={handleClosedFestival}>Close Zoo</button>
      </div>
      <MidsummerParade members={members} />
      <div className="parade-buttons">
        <button onClick={handleFlowerGirl}>Flower Girl</button>
        <button onClick={handleBear}>Bear</button>
        <button onClick={handleFairy}>Fairy</button>
        <button onClick={handleMermaid}>Mermaid</button>
        <button onClick={handleRemove}>Remove A Parade Member</button>
      </div>
    </div>
  );
}

export default App;
