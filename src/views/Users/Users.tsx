import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import Placeholder from '../../assets/images/user-placeholder.png';
import Add from '../../assets/images/add1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUsersList } from '../../redux/actions/users';

const Users = (): JSX.Element => {
  const { isProcessing, info } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isProcessing ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Typography variant="h3" align="center">
            Users
          </Typography>
          <Stack
            mt={2}
            spacing={3}
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            alignItems="center"
            alignContent="center"
            flexWrap="wrap"
          >
            {!!info?.length &&
              info?.map((item) => {
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
                    onClick={() =>
                      navigate(`/users/${item.id}/posts`, {
                        state: { name: item.name },
                      })
                    }
                  />
                );
              })}
            <Link to="/createUser">
              <CardComponent image={Add} showMenu={false} />
            </Link>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Users;
