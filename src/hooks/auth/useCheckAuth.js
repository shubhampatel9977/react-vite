import { useQuery } from "react-query";
import { axiosWithAuth } from "../../libs/axiosWithAuth";

const checkAuth = async () => {
  try {
    const response = await axiosWithAuth.get(`/auth/check`);
    return response.data;
  } catch (err) {
    console.error("Failed to check auth:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useCheckAuth() {
  return useQuery("check_auth", checkAuth, { retry: false});
}