import axios from "axios";
import { fetchAccessToken } from './fetchAccessToken';

const bashPath = import.meta.env.VITE_BASH_PATH

export const axiosWithAuth = axios.create({
  baseURL: bashPath,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

axiosWithAuth.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      const newToken = await fetchAccessToken(refreshToken);
      if (newToken) {
        localStorage.setItem('accessToken', newToken);
        axiosWithAuth.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        return axiosWithAuth(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
