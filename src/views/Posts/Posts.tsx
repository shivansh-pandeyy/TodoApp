import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import { getPostsList } from '../../redux/actions/posts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Posts = () => {
  const params = useParams();
  const { state } = useLocation();
  const { info, isProcessing } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();
  const menuList = [
    {
      label: 'Posts',
      to: `/users/${params.id}/posts`,
      active: true,
    },
    {
      label: 'Todo',
      to: `/users/${params.id}/todos`,
    },
  ];

  useEffect(() => {
    if (params.id) {
      dispatch(getPostsList(params.id));
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
      <Header list={menuList} />
      {isProcessing ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {!!info?.length &&
            info?.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  name={state.name}
                />
              );
            })}
        </>
      )}
    </Box>
  );
};

export default Posts;
