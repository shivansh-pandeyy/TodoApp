import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import UserCard from '../../components/UserCard'
import Placeholder from '../../assets/images/user-placeholder.png';
import Add from '../../assets/images/add1.png';
import { Link } from 'react-router-dom';

const Users: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" align='center'>Users</Typography>
      <Stack mt={2} spacing={3} direction={{ xs: 'column', sm: 'column', md: 'row'}} alignItems='center' alignContent='center' flexWrap='wrap'>
        <UserCard image={Placeholder} name="Shivansh" showMenu={true} />
        <Link to='/createUser'>
          <UserCard image={Add} showMenu={false} />
        </Link>
        
      </Stack>
    </Box>
  )
}

export default Users
