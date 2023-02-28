import { store } from '../../app';
import { getUserData } from './userService';
import { UserState } from './userTypes';

export const getUserState = () =>
  new Promise<UserState>((resolve) =>
    setTimeout(() => resolve(store.getState().userReducer))
  );

export const getLoggedInUser = async () => {
  const { isLoggedIn, data } = await getUserState();
  if (isLoggedIn && data?.username) return data;

  const [err, user] = await getUserData();
  if (err) return;

  return user;
};
