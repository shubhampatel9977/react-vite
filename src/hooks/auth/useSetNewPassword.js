import { useMutation } from "react-query";
import { Axios } from "../../libs/axios";

const setNewPassword = async (data) => {
  try {
    const payload = {
      email: data?.email,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
    }
    const response = await Axios.post(`/auth/setNewPassword`, payload);
    return response.data;
  } catch (err) {
    console.error("Failed to set new password:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useSetNewPassword() {
  return useMutation("set_new_password", setNewPassword);
}