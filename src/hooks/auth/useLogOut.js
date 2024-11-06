import { useMutation } from "react-query";
import { Axios } from "../../libs/axios";

const logOut = async () => {
  try {
    const response = await Axios.post(`/auth/logout`);
    return response.data;
  } catch (err) {
    console.error("Failed to log out:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useLogOut() {
  return useMutation("log_out", logOut);
}