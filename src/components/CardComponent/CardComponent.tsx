import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  SxProps,
} from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import './CardComponent.scss';

export interface MenuAction {
  name: string;
  action: () => void;
}
interface CardComponentProps {
  name?: string;
  image?: string;
  showMenu: boolean;
  menuWithAction?: MenuAction[];
  onClick?: () => void;
  children?: JSX.Element;
  sx?: SxProps;
  title?: string;
}

const CardComponent = ({
  name,
  image,
  showMenu,
  menuWithAction,
  onClick,
  children,
  sx = {
    width: 300,
    minHeight: 175,
  },
  title,
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
    <Card sx={{ ...sx, backgroundColor: '#F4F9F9' }}>
      {(title || showMenu) && (
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
                        key={menuItem.name}
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
          title={title}
        />
      )}
      <Box onClick={onClick}>
        {image && (
          <CardMedia
            component="img"
            sx={{
              width: 100,
              margin: 'auto',
            }}
            image={image}
          />
        )}
        <CardContent>
          {children}
          {name && <Typography align="center">{name}</Typography>}
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardComponent;
