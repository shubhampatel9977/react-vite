import { useMutation } from "react-query";
import { Axios } from "../../libs/axios";

const register = async (data) => {
  try {
    const payload = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    }
    const response = await Axios.post(`auth/signUp`, payload);
    return response.data;
  } catch (err) {
    console.error("Failed to register:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useRegister() {
  return useMutation("register", register);
}