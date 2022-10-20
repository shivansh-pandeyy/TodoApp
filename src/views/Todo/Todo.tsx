import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import TodoCard from '../../components/TodoCard/TodoCard';
import { getTodoList } from '../../redux/actions/todo';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Todo = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { info, isProcessing } = useAppSelector((state) => state.todoReducer);

  useEffect(() => {
    if (params.id) {
      dispatch(getTodoList(params.id));
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Header
        list={[
          {
            label: 'Posts',
            to: `/users/${params.id}/posts`,
          },
          {
            label: 'Todo',
            to: `/users/${params.id}/todos`,
            active: true,
          },
        ]}
      />
      {isProcessing ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {!!info?.length &&
            info?.map((todo) => {
              return <TodoCard key={todo.id} todo={todo} />;
            })}
        </>
      )}
    </Box>
  );
};

export default Todo;
