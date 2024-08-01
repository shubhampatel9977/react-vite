import { useMutation } from "react-query";
import { Axios } from "../../libs/axios";

const login = async (data) => {
  try {
    const payload = {
        email: data?.email,
        password: data?.password,
    }
    const response = await Axios.post(`/auth/logIn`, payload);
    return response.data;
  } catch (err) {
    console.error("Failed to login:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useLogin() {
  return useMutation("login", login);
}