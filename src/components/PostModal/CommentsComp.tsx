import { Box, Typography } from '@mui/material';
import React from 'react';

interface CommentsCompProps {
  name: string;
  email: string;
  body: string;
}

const CommentsComp = ({ name, email, body }: CommentsCompProps) => {
  return (
    <Box>
      <Typography variant="subtitle1">
        {name}({email})
      </Typography>
      <Typography paragraph>{body}</Typography>
    </Box>
  );
};

export default CommentsComp;
