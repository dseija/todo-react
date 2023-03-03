import { SettingsActionName, SettingsActionType } from './settingsActions';
import { loadSavedSettings } from './settingsHelper';
import { SettingsState, SettingsThemeMode } from './settingsTypes';

const initialSettings = loadSavedSettings();

const toggleThemeMode = (
  settings: SettingsState,
  themeMode: SettingsThemeMode
): SettingsState => {
  return { ...settings, themeMode };
};

const settingsReducer = (
  settings: SettingsState = initialSettings,
  action: SettingsActionType
) => {
  switch (action.type) {
    case SettingsActionName.SET_SETTINGS:
      return (action.payload || initialSettings) as SettingsState;
    case SettingsActionName.SET_THEME_MODE:
      return toggleThemeMode(settings, action.payload as SettingsThemeMode);
    default:
      return settings;
  }
};

export default settingsReducer;
