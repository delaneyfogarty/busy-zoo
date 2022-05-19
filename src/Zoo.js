// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FlowerGirlBearFight from './FlowerGirlBearFight.js';
import OpenClosedSign from './OpenClosedSign.js';
import MidsummerParade from './MidsummerParade.js';
import CustomButton from './CustomButton';

function Zoo() {
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
        <CustomButton onClick={() => setFlowerGirlSize(flowerGirlSize + ATTACK_MODIFIER)}>
          Drink Mushroom Tea
        </CustomButton>
        <CustomButton onClick={() => setBearSize(bearSize - ATTACK_MODIFIER)}>
          Attack the bear!
        </CustomButton>
        <CustomButton onClick={() => setBearSize(bearSize + ATTACK_MODIFIER)}>
          Eat Some Berries
        </CustomButton>
        <CustomButton onClick={() => setFlowerGirlSize(flowerGirlSize - ATTACK_MODIFIER)}>
          Roar at Flower Girl!
        </CustomButton>
      </div>
      <OpenClosedSign isOpen={isOpen} />
      <div className="buttons">
        <CustomButton onClick={handleOpenFestival}>Open Festival</CustomButton>
        <CustomButton onClick={handleClosedFestival}>Close Festival</CustomButton>
      </div>
      <MidsummerParade className="members" members={members} />
      <div className="parade-buttons">
        <CustomButton onClick={handleFlowerGirl}>Flower Girl</CustomButton>
        <CustomButton onClick={handleBear}>Bear</CustomButton>
        <CustomButton onClick={handleFairy}>Fairy</CustomButton>
        <CustomButton onClick={handleMermaid}>Mermaid</CustomButton>
        <CustomButton onClick={handleRemove}>Remove A Parade Member</CustomButton>
      </div>
    </div>
  );
}

export default Zoo;
