import { SettingsActionName, SettingsActionType } from './settingsActions';
import { SettingsState, SettingsThemeMode } from './settingsTypes';

const toggleThemeMode = (
  settings: SettingsState,
  themeMode: SettingsThemeMode
): SettingsState => {
  return { ...settings, themeMode };
};

const settingsReducer = (
  settings: SettingsState = { themeMode: 'dark' },
  action: SettingsActionType
) => {
  switch (action.type) {
    case SettingsActionName.SET_THEME_MODE:
      return toggleThemeMode(settings, action.payload as SettingsThemeMode);
    default:
      return settings;
  }
};

export default settingsReducer;
