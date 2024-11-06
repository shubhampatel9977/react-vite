import axios from "axios";
import { store } from '../store/store';
import { clearUserInfo } from '../store/slice/userSlice'; 

const bashPath = import.meta.env.VITE_BASH_PATH;

export const axiosWithAuth = axios.create({
  baseURL: bashPath,
  withCredentials: true, // Ensures cookies are sent with each request
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// Setup Axios interceptor
axiosWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
      try {
        // Attempt to refresh the token
        await axios.post("http://localhost:8080/api/auth/refreshToken", {}, { withCredentials: true });

        // Mark request to prevent infinite retry loop
        error.config.__isRetryRequest = true;

        // Retry the original request
        return axiosWithAuth(error.config);

      } catch (err) {
        console.error("Token refresh failed:", err);

        // Dispatch the logout action to clear the Redux store
        store.dispatch(clearUserInfo());
      }
    }
    return Promise.reject(error);
  }
);
