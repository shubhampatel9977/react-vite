import { useMutation } from "react-query";
import { axiosWithAuth } from "../../libs/axiosWithAuth";

const updateStudent = async (data) => {
  try {
    const formData = new FormData();
    if (data?.profile) {
      formData.append("profile", data?.profile);
    }
    formData.append("name", data?.name);
    formData.append("age", data?.age);
    formData.append("college", data?.college);
    formData.append("description", data?.description);
    const response = await axiosWithAuth.put(`/student/${data?.id}`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to update student:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useUpdateStudent() {
  return useMutation("update_student", updateStudent);
}