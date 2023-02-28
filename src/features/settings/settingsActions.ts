import { createAction } from '../../common/utils';
import { SettingsThemeMode } from './settingsTypes';

export enum SettingsActionName {
  SET_THEME_MODE = 'SET_THEME_MODE',
}

export const setSettingsThemeMode = (themeMode: SettingsThemeMode) =>
  createAction(SettingsActionName.SET_THEME_MODE, themeMode);

// Export action types
export type SettingsActionType = ReturnType<typeof setSettingsThemeMode>;
