import { createAction } from '../../common/utils';
import { UserData } from './userTypes';

export enum UserActionName {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}

export const userLoginAction = (data: UserData) =>
  createAction(UserActionName.USER_LOGIN, data);

export const userLogoutAction = () => createAction(UserActionName.USER_LOGOUT);

// Export action types
export type UserActionType = ReturnType<
  typeof userLoginAction | typeof userLogoutAction
>;
