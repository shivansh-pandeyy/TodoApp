import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PostObj } from '../../redux/constants/posts';
import CardComponent from '../CardComponent/CardComponent';
import PostModal from '../PostModal/PostModal';

interface PostCardProps {
  title: string;
  body: string;
  name?: string;
  post: PostObj;
  email?: string;
}

const PostCard = ({
  title,
  body,
  name,
  post,
  email,
}: PostCardProps): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CardComponent
        sx={{
          minHeight: 30,
          width: { xs: 300, sm: 400, md: 700 },
        }}
        showMenu={false}
        title={title}
        onClick={() => setModalOpen(true)}
      >
        <Box>
          <Typography paragraph>{body}</Typography>
          <Typography sx={{ float: 'right' }} variant="caption">
            {name}
          </Typography>
        </Box>
      </CardComponent>
      <PostModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        post={post}
        cUser={name}
        cEmail={email}
      />
    </>
  );
};

export default PostCard;
