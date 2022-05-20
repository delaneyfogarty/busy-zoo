import React from 'react';

export default function ParadeEmoji({ member }) {
  return (
    <div className="member">
      <>
        {member === 'flower girl' && <span>🧝‍♀️</span>}
        {member === 'bear' && <span>🐻</span>}
        {member === 'mermaid' && <span>🧜</span>}
        {member === 'fairy' && <span> 🧚‍♀️ </span>}
      </>
    </div>
  );
}
