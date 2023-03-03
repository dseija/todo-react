import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { setSettingsThemeModeAction } from './settingsActions';
import { saveSettings } from './settingsHelper';
import { updateSettings } from './settingsService';

const SettingsList = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsReducer);

  useEffect(() => {
    const saved = saveSettings(settings);
    if (saved) updateSettings(settings);
  }, [settings]);

  const toggleThemeMode = () => {
    const mode = settings.themeMode === 'dark' ? 'light' : 'dark';
    dispatch(setSettingsThemeModeAction(mode));
  };

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
            onChange={toggleThemeMode}
          />
        </ListItem>
      </List>
    </>
  );
};

export default SettingsList;
