import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Documents = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Document 
      </Typography>
      <Typography variant="body1" color="text.secondary">
        content
      </Typography>
    </Paper>
  );
};

export default Documents;
