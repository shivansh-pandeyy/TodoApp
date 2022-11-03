import { Box, CardMedia, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import Placeholder from '../../assets/images/user-placeholder.png';
import Add from '../../assets/images/add1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUsersList } from '../../redux/actions/users';
import { useInView } from 'react-intersection-observer';

const Users = (): JSX.Element => {
  const { isProcessing, info, runEffect } = useAppSelector(
    (state) => state.userReducer
  );
  const { ref, inView } = useInView();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const imgStyle = {
    width: 100,
    margin: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(0, 40%)',
  };

  useEffect(() => {
    if (runEffect) {
      dispatch(getUsersList());
    }
  }, []);

  useEffect(() => {
    if (inView) {
      dispatch(getUsersList());
    }
  }, [inView]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography className="header" variant="h3" align="center">
        Users
      </Typography>
      <Stack
        width={{ xs: 300, sm: 700, md: 1000 }}
        mt={2}
        spacing={0}
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        alignItems="center"
        alignContent="center"
        flexWrap="wrap"
      >
        <Link className="add-icon" to="/createUser">
          <CardComponent sx={{ height: 225, width: 300 }} showMenu={false}>
            <CardMedia component="img" sx={imgStyle} image={Add} />
          </CardComponent>
        </Link>
        {!!info?.length &&
          info?.map((item, index) => {
            if (index + 1 === info.length) {
              return (
                <div ref={ref}>
                  <CardComponent
                    key={item.id}
                    image={Placeholder}
                    name={item.name}
                    showMenu={true}
                    menuWithAction={[
                      {
                        name: 'Edit',
                        action: () => {
                          navigate(`/user/edit/${item.id}`);
                        },
                      },
                    ]}
                    onClick={() => navigate(`/users/${item.id}/posts`)}
                  />
                </div>
              );
            }
            return (
              <CardComponent
                key={item.id}
                image={Placeholder}
                name={item.name}
                showMenu={true}
                menuWithAction={[
                  {
                    name: 'Edit',
                    action: () => {
                      navigate(`/user/edit/${item.id}`);
                    },
                  },
                ]}
                onClick={() => navigate(`/users/${item.id}/posts`)}
              />
            );
          })}
        {isProcessing && <h1>Loading...</h1>}
      </Stack>
    </Box>
  );
};

export default Users;
