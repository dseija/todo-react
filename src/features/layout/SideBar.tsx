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
import { NavLink } from 'react-router-dom';
import { SideBarItem } from './layoutTypes';

const SideBar = () => {
  console.log(window.location.pathname);
  const drawerWidth = 240;

  const sideBarItems: SideBarItem[] = [
    { icon: 'home', text: 'Home', path: '/' },
    { icon: 'person', text: 'My Profile', path: '/profile' },
    { icon: 'settings', text: 'Settings', path: '/settings' },
    { icon: 'logout', text: 'Logout' },
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
