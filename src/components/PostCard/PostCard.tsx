import { Box, Typography } from '@mui/material';
import React from 'react';
import CardComponent from '../CardComponent/CardComponent';

interface PostCardProps {
  title: string;
  body: string;
  name: string;
}

const PostCard = ({ title, body, name }: PostCardProps): JSX.Element => {
  return (
    <CardComponent
      sx={{
        minHeight: 30,
        width: { xs: 300, sm: 400, md: 700 },
      }}
      showMenu={false}
      title={title}
    >
      <Box>
        <Typography paragraph>{body}</Typography>
        <Typography sx={{ float: 'right' }} variant="caption">
          {name}
        </Typography>
      </Box>
    </CardComponent>
  );
};

export default PostCard;
