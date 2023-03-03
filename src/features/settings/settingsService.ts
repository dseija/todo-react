import { loadSavedSettings } from './settingsHelper';
import { SettingsState } from './settingsTypes';

// TODO: change the type 'any'
type SettingsResponse = [any, SettingsState?];

const simRequest = (value: any) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value));
  });
const simService = {
  get: () => simRequest(loadSavedSettings()),
  put: (data: any) => simRequest(console.log('fake update settings:', data)),
};

export const getSettings = async (): Promise<SettingsResponse> => {
  try {
    const settings = await simService.get();
    return [null, settings as SettingsState];
  } catch (err) {
    return [err];
  }
};

export const updateSettings = async (
  settings: SettingsState
): Promise<SettingsResponse> => {
  try {
    await simService.put(settings);
    return [null, settings];
  } catch (err) {
    return [err];
  }
};
