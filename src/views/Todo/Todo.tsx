import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import TodoCard from '../../components/TodoCard/TodoCard';
import { getTodoList } from '../../redux/actions/todo';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Todo = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { info, isProcessing } = useAppSelector((state) => state.todoReducer);
  const { ref, inView } = useInView();
  const listMenu = [
    {
      label: 'Posts',
      to: `/users/${params.id}/posts`,
    },
    {
      label: 'Todo',
      to: `/users/${params.id}/todos`,
      active: true,
    },
  ];

  useEffect(() => {
    if (params.id) {
      dispatch(getTodoList(params.id));
    }
  }, []);

  useEffect(() => {
    if (params.id && inView) {
      dispatch(getTodoList(params.id));
    }
  }, [inView]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Header list={listMenu} />
      {!!info?.length &&
        info?.map((todo, index) => {
          if (info.length === index + 1) {
            return (
              <div ref={ref}>
                <TodoCard key={todo.id} todo={todo} />
              </div>
            );
          }
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      {isProcessing && <h2>Loading...</h2>}
    </Box>
  );
};

export default Todo;
