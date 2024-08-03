import axios from 'axios';
// import { useDispatch } from 'react-redux'
// import { clearUserInfo } from '../store/slice/userSlice';

const bashPath = import.meta.env.VITE_BASH_PATH

export const fetchAccessToken = async (refreshToken, type) => {
  try {
    // const dispatch = useDispatch();
    const payload = { refreshToken }
    const response = await axios.post(`${bashPath}/auth/refreshToken`, payload);
    return response?.data?.data?.accessToken;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401|| status === 403 || status === 500) {
        console.error('Unauthorized or server error, logging out:', error);
        if(type == "user") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          // dispatch( clearUserInfo());
        }
        if(type == "Admin") {
          localStorage.removeItem("adminAccessToken");
          localStorage.removeItem("adminRefreshToken");
        }
      }
    }
    console.error('Failed to fetch access token:', error);
    return null;
  }
};
