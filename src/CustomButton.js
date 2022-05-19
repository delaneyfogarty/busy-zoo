import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';

export default function CustomButton({ onClick, children }) {
  return (
    <ToggleButton onClick={onClick} color="primary" variant="contained">
      {children}
    </ToggleButton>
  );
}
