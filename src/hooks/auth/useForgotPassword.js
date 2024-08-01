import { useMutation } from "react-query";
import { Axios } from "../../libs/axios";

const forgotPassword = async (data) => {
  try {
    const payload = {
      email: data?.email,
    }
    const response = await Axios.post(`/auth/forgotPassword`, payload);
    return response.data;
  } catch (err) {
    console.error("Failed to forgot password:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useForgotPassword() {
  return useMutation("forgot_password", forgotPassword);
}