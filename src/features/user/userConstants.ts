import { CookieSetOptions } from 'universal-cookie';

export const USER_COOKIE_OPTIONS: CookieSetOptions = {
  sameSite: 'lax',
  path: '/',
  maxAge: 60 * 60 * 24 * 30,
};
