import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router';
import { getUser } from '../../api/users';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import { getPostsList } from '../../redux/actions/posts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

type GetUserDetails = () => Promise<void>;

const Posts = () => {
  const params = useParams();
  const [username, setUsername] = useState('');
  const [userEmail, setEmail] = useState('');
  const navigate = useNavigate();
  const { info, isProcessing, runEffect } = useAppSelector(
    (state) => state.postReducer
  );
  const { ref, inView } = useInView();
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

  const getUserDetails: GetUserDetails = async () => {
    if (params.id) {
      const res = await getUser(params.id);
      setEmail(res.data.email);
      setUsername(res.data.name);
    }
  };

  useEffect(() => {
    if (params.id && runEffect) {
      dispatch(getPostsList(params.id));
    }
    getUserDetails();
  }, []);

  useEffect(() => {
    if (params.id && inView) {
      dispatch(getPostsList(params.id));
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
      <Header
        list={menuList}
        addBtn
        btnAction={() => {
          navigate(`/users/${params.id}/createPost`);
        }}
      />
      {!!info?.length &&
        info?.map((post, index) => {
          if (index + 1 === info.length) {
            return (
              <div ref={ref}>
                <PostCard
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  name={username}
                  email={userEmail}
                  post={post}
                />
              </div>
            );
          }
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              name={username}
              email={userEmail}
              post={post}
            />
          );
        })}
      {isProcessing && <h2>Loading...</h2>}
    </Box>
  );
};

export default Posts;
