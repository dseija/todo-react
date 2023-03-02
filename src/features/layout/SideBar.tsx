import {
  Box,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { useCookies } from 'react-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../common/hooks';
import { userLogoutAction } from '../user';
import { SideBarItem } from './layoutTypes';

const SideBar = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const drawerWidth = 240;

  const logout = () => {
    removeCookie('sessionToken');
    removeCookie('userFirstname');
    removeCookie('userUsername');
    dispatch(userLogoutAction());
    navigate('/signin', { replace: true });
  };

  const sideBarItems: SideBarItem[] = [
    { icon: 'home', text: 'Home', path: '/' },
    { icon: 'person', text: 'My Profile', path: '/profile' },
    { icon: 'settings', text: 'Settings', path: '/settings' },
    { icon: 'logout', text: 'Logout', onClick: logout },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {sideBarItems.map((item, index) => (
            <ListItemButton
              key={`${item.icon}_item${index}`}
              component={item.path ? NavLink : ListItemButton}
              to={item.path}
              selected={window.location.pathname === item.path}
              onClick={item.onClick}
            >
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
