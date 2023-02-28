import defaultAxios from 'axios';
import cookies from './cookies';

const axios = defaultAxios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ',
  },
});

axios.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization) {
      if (!cookies.get('sessionToken')) return Promise.reject();

      config.headers.Authorization = `Bearer ${cookies.get('sessionToken')}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
