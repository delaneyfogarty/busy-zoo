import React from 'react';
import ParadeEmoji from './ParadeEmoji.js';

export default function MidsummerParade({ members }) {
  return (
    <div className="members">
      {members.map((member, i) => (
        <ParadeEmoji key={member.name + i} member={member} />
      ))}
    </div>
  );
}
