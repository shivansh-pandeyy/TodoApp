import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
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

  const getUserDetails: GetUserDetails = async () => {
    if (params.id) {
      const res = await getUser(params.id);
      setEmail(res.data.email);
      setUsername(res.data.name);
    }
  };

  useEffect(() => {
    if (params.id) {
      dispatch(getPostsList(params.id));
    }
    getUserDetails();
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
                  name={username}
                  email={userEmail}
                  post={post}
                />
              );
            })}
        </>
      )}
    </Box>
  );
};

export default Posts;
