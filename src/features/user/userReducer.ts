import { UserActionName, UserActionType } from './userActions';
import { UserData, UserState } from './userTypes';

const userLogin = (data: UserData): UserState => {
  return { isLoggedIn: true, data };
};

const userLogout = (): UserState => {
  return { isLoggedIn: false };
};

const userReducer = (user: UserState = {}, action: UserActionType) => {
  switch (action.type) {
    case UserActionName.USER_LOGIN:
      return userLogin(action.payload as UserData);
    case UserActionName.USER_LOGOUT:
      return userLogout();
    default:
      return user;
  }
};

export default userReducer;
