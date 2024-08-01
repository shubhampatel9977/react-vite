import { useMutation } from "react-query";
import { Axios } from "../../libs/axios";

const otpVerify = async (data) => {
  try {
    const payload = {
      email: data?.email,
      otp: data?.otp,
    }
    const response = await Axios.post(`/auth/otpVerify`, payload);
    return response.data;
  } catch (err) {
    console.error("Failed to otp verify:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useOtpVerify() {
  return useMutation("otp_verify", otpVerify);
}