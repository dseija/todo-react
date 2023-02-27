import defaultAxios from 'axios';
import cookies from './cookies';

const axios = defaultAxios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  (config) => (!cookies.get('sessionToken') ? Promise.reject() : config),
  (error) => Promise.reject(error)
);

export default axios;
