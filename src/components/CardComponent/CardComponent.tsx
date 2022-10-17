import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export interface MenuAction {
  name: string;
  action: () => void;
}
interface CardComponentProps {
  name?: string;
  image: string;
  showMenu: boolean;
  menuWithAction?: MenuAction[];
}

const CardComponent = ({
  name,
  image,
  showMenu,
  menuWithAction,
}: CardComponentProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        width: 300,
        minHeight: 175,
        margin: '0.5rem !important',
      }}
    >
      <CardHeader
        action={
          showMenu && (
            <>
              <IconButton
                id="basic-button"
                aria-label="settings"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
                {menuWithAction &&
                  menuWithAction.length > 0 &&
                  menuWithAction.map((menuItem) => (
                    <MenuItem
                      onClick={() => {
                        menuItem.action();
                        handleClose();
                      }}
                    >
                      {menuItem.name}
                    </MenuItem>
                  ))}
              </Menu>
            </>
          )
        }
      />
      <CardMedia
        component="img"
        sx={{
          width: 100,
          margin: 'auto',
        }}
        image={image}
      />
      <CardContent>
        <Typography align="center">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
