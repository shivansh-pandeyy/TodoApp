import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Input from '../Input/Input';
import CommentsComp from './CommentsComp';
import { PostObj } from '../../redux/constants/posts';
import { useAppDispatch } from '../../redux/hooks';
import { addCommentToPost } from '../../redux/actions/posts';

interface PostModalProps {
  open: boolean;
  handleClose: () => void;
  post: PostObj;
  cUser?: string;
  cEmail?: string;
}

const PostModal = ({
  open,
  handleClose,
  post,
  cUser = 'Name',
  cEmail = 'Email',
}: PostModalProps) => {
  const [comment, setComment] = useState<string>('');
  const dispatch = useAppDispatch();
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 270, sm: 400, md: 700 },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const addComment = () => {
    if (comment.trim().length === 0) return;
    const payload = {
      postId: post?.id,
      id: Date.now().toString(),
      name: cUser,
      email: cEmail,
      body: comment,
    };
    dispatch(addCommentToPost(payload));
    setComment('');
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h5" my={3}>
          {post.title}
        </Typography>
        <Typography paragraph>{post.body}</Typography>
        <Typography variant="h6">Comments:</Typography>
        {post?.comments &&
          !!post.comments?.length &&
          post.comments.map((comment) => {
            return (
              <CommentsComp
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            );
          })}
        <Box>
          <Input
            width="100%"
            id="comment"
            label="Enter a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            sx={{
              backgroundColor: 'lightblue',
              my: 2,
            }}
            onClick={addComment}
            disabled={comment.length === 0}
          >
            Add Comment
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PostModal;
