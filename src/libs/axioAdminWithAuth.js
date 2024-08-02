import axios from "axios";
import { fetchAccessToken } from './fetchAccessToken';

const bashPath = import.meta.env.VITE_BASH_PATH

export const axioAdminWithAuth = axios.create({
  baseURL: bashPath,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

axioAdminWithAuth.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('adminAccessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axioAdminWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
      originalRequest._retry = true;
      const adminRefreshToken = localStorage.getItem('adminRefreshToken');
      const newToken = await fetchAccessToken(adminRefreshToken, "Admin");
      if (newToken) {
        localStorage.setItem('adminAccessToken', newToken);
        axioAdminWithAuth.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        return axioAdminWithAuth(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
