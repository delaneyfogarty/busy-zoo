import React from 'react';

export default function OpenClosedSign({ isOpen }) {
  return (
    <div className="is-open">
      {isOpen
        ? 'Welcome to the Midsummer Festival!'
        : 'Summer Solstice has passed. See you next year!'}
    </div>
  );
}
