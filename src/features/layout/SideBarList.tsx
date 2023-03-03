import {
  List,
  ListItemButton,
  ListItemIcon,
  Icon,
  ListItemText,
} from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../common/hooks';
import { clearSettings } from '../settings';
import { userLogoutAction } from '../user';
import { SideBarItem } from './layoutTypes';

const SideBarList = () => {
  const [_cookies, _setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    removeCookie('sessionToken');
    removeCookie('userFirstname');
    removeCookie('userUsername');
    clearSettings();
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
  );
};

export default SideBarList;
