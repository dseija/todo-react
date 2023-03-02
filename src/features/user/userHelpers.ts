import { cookies } from '../../common/lib';

export const userHasSession = async () => {
  return Boolean(await cookies.get('sessionToken'));
};

export const getUserSessionName = async () => {
  const firstname = await cookies.get('userFirstname');
  const username = await cookies.get('userUsername');
  return firstname || username;
};
