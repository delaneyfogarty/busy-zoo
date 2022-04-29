import React from 'react';
import ParadeEmoji from './ParadeEmoji.js';

export default function MidsummerParade({ members }) {
  return (
    <div className="members">
      {members.map((member) => (
        <ParadeEmoji key={member.name} member={member} />
      ))}
    </div>
  );
}
