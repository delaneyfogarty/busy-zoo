import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';

export default function CustomButton({ onClick, children }) {
  return (
    <ToggleButton
      onClick={onClick}
      variant="contained"
      sx={{
        color: 'teal',
        background: 'lightpink',
      }}
    >
      {children}
    </ToggleButton>
  );
}
