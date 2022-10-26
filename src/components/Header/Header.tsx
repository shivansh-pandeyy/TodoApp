import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import './Header.scss';
import AddIcon from '@mui/icons-material/Add';

interface TabList {
  label: string;
  to: string;
  active?: boolean;
}

interface HeaderPropsType {
  list: TabList[];
  addBtn?: boolean;
  btnAction?: () => void;
}

const Header = ({ list, addBtn, btnAction }: HeaderPropsType): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {list.length > 0 &&
        list.map((tabItem) => {
          return (
            <Box
              key={tabItem.to}
              className={`tab ${tabItem.active && 'active'}`}
              component={Link}
              to={tabItem.to}
            >
              {tabItem.label}
            </Box>
          );
        })}
      {addBtn && (
        <Button
          onClick={btnAction}
          sx={{ borderRadius: 60, marginLeft: 10 }}
          variant="outlined"
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      )}
    </Box>
  );
};

export default Header;
