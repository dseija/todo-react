import { createAction } from '../../common/utils';
import { SettingsState, SettingsThemeMode } from './settingsTypes';

export enum SettingsActionName {
  SET_SETTINGS = 'SET_SETTINGS',
  SET_THEME_MODE = 'SET_THEME_MODE',
}

export const setSettingsAction = (settings: SettingsState) =>
  createAction(SettingsActionName.SET_SETTINGS, settings);

export const setSettingsThemeModeAction = (themeMode: SettingsThemeMode) =>
  createAction(SettingsActionName.SET_THEME_MODE, themeMode);

// Export action types
export type SettingsActionType = ReturnType<
  typeof setSettingsAction | typeof setSettingsThemeModeAction
>;
