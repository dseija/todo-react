import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { setSettingsThemeMode } from './settingsActions';

const SettingsList = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsReducer);

  return (
    <>
      <List sx={{ width: '100%' }}>
        <ListItem>
          <ListItemIcon>
            <Icon>brightness_medium</Icon>
          </ListItemIcon>
          <ListItemText id="settings-dark-mode">Dark mode</ListItemText>
          <Switch
            edge="end"
            inputProps={{ 'aria-labelledby': 'settings-dark-mode' }}
            checked={settings.themeMode === 'dark'}
            onChange={() =>
              dispatch(
                setSettingsThemeMode(
                  settings.themeMode === 'dark' ? 'light' : 'dark'
                )
              )
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default SettingsList;
