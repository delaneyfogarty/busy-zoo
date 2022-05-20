import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ onClick, children }) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        color: 'teal',
        background: 'lightpink',
      }}
    >
      {children}
    </Button>
  );
}
