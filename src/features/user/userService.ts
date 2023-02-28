import { axios } from '../../common/lib';
import { UserData } from './userTypes';

// TODO: change the type 'any'
type UserResponse = [any, UserData?];

export const getUserData = async (): Promise<UserResponse> => {
  try {
    const { data } = await axios.get('/user/whoami');
    return [null, data as UserData];
  } catch (err) {
    return [err];
  }
};

export const userLogin = async (
  loginData: Partial<UserData>
): Promise<UserResponse> => {
  try {
    const { data } = await axios.post('/auth/login', loginData, {
      headers: { Authorization: undefined },
    });
    return [null, data as UserData];
  } catch (err) {
    return [err];
  }
};

export const userRegister = async (
  registerData: Partial<UserData>
): Promise<UserResponse> => {
  try {
    const { data } = await axios.post('/auth/register', registerData, {
      headers: { Authorization: undefined },
    });
    return [null, data as UserData];
  } catch (err) {
    return [err];
  }
};
