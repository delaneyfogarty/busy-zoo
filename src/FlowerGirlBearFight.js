import React from 'react';

export default function FlowerGirlBearFight({ flowerGirlSize, bearSize }) {
  return (
    <div className="fight">
      <div className="fighter">
        <div className="emoji" style={{ fontSize: `${flowerGirlSize}rem` }}>
          🧝‍♀️
        </div>
      </div>
      <div className="fighter">
        <div className="emoji" style={{ fontSize: `${bearSize}rem` }}>
          🐻
        </div>
      </div>
    </div>
  );
}
