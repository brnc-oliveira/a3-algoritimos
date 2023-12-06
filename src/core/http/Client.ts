import axios from 'axios';
import { parse, stringify } from 'qs';

const Client = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 60000,
  withCredentials: true,
  paramsSerializer: {
    // @ts-ignore
    encode: parse,
    // @ts-ignore
    serialize: stringify,
  },
});

Client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response &&
        error.response.status &&
        error.response.status === 502) ||
      (error.code && error.code === 'ERR_NETWORK')
    )
      throw new Error('Unavailable server!');

    if (
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      window.location.href = '/login';
      throw new Error('Unauthorized');
    }

    throw error;
  }
);

export default Client;
