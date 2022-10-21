import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import './Header.scss';

interface TabList {
  label: string;
  to: string;
  active?: boolean;
}

interface HeaderPropsType {
  list: TabList[];
}

const Header = ({ list }: HeaderPropsType): JSX.Element => {
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
    </Box>
  );
};

export default Header;
