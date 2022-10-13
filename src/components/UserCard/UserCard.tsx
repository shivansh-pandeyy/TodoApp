import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserCard: React.FC<{ name?: string, image: string, showMenu: boolean }> = ({ name, image, showMenu }) => {
  return (
    <Card sx={{
      width: 300,
      minHeight: 175,
      margin: '0.5rem !important'
    }}>
      <CardHeader action={
        showMenu && <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      } />
        <CardMedia
        component="img"
        sx={{
          width: 100,
          margin: 'auto',
        }}
        image={image}
      />
      <CardContent>
        <Typography align='center'>
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserCard