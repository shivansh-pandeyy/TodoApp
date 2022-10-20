import { Box, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TodoObj } from '../../redux/constants/todo';
import CardComponent from '../CardComponent/CardComponent';
interface TodoCardProps {
  todo: TodoObj;
}
const TodoCard = ({ todo }: TodoCardProps) => {
  const [completed, setCompleted] = useState(todo.completed);
  return (
    <CardComponent
      sx={{
        width: { xs: 300, sm: 400, md: 700 },
        minHeight: 60,
      }}
      showMenu={false}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>{todo.title}</Typography>
        <Checkbox
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </Box>
    </CardComponent>
  );
};

export default TodoCard;
