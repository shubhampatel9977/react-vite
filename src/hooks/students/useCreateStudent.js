import { useMutation } from "react-query";
import { axiosWithAuth } from "../../libs/axiosWithAuth";

const createStudent = async (data) => {
  try {
    const formData = new FormData();
    formData.append("profile", data?.profile);
    formData.append("name", data?.name);
    formData.append("age", data?.age);
    formData.append("college", data?.college);
    formData.append("description", data?.description);
    const response = await axiosWithAuth.post(`/student`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to create student:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useCreateStudent() {
  return useMutation("create_student", createStudent);
}