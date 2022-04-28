import React from 'react';

export default function OpenClosedSign({ isOpen }) {
  return <div className="is-open">{isOpen ? 'Welcome to the zoo!' : 'Sorry we missed you!'}</div>;
}
