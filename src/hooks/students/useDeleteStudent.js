import { useMutation } from "react-query";
import { axiosWithAuth } from "../../libs/axiosWithAuth";

const deleteStudent = async (studentId) => {
  try {
    const response = await axiosWithAuth.delete(`/student/${studentId}`);
    return response.data;
  } catch (err) {
    console.error("Failed to delete student:", err);
    throw new Error(err?.response?.data?.message);
  }
}

export default function useDeleteStudent() {
  return useMutation("delete_student", deleteStudent);
}