import { useMutation } from "react-query";
import { axioAdminWithAuth } from "../../../libs/axioAdminWithAuth";

const deleteTeacher = async (techId) => {
  try {
    const response = await axioAdminWithAuth.delete(`/admin/teacher/${techId}`);
    return response.data;
  } catch (err) {
    console.error("Failed to delete teacher:", err);
    throw new Error(err?.response?.data?.message);
  }
}

export default function useDeleteTeacher() {
  return useMutation("delete_teacher", deleteTeacher);
}