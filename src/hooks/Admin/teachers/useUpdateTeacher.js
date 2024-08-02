import { useMutation } from "react-query";
import { axioAdminWithAuth } from "../../../libs/axioAdminWithAuth";

const updateTeacher = async (data) => {
  try {
    const formData = new FormData();
    if (data?.profile) {
      formData.append("profile", data?.profile);
    }
    formData.append("name", data?.name);
    formData.append("age", data?.age);
    formData.append("college", data?.college);
    formData.append("description", data?.description);
    const response = await axioAdminWithAuth.put(`/admin/teacher/${data?.id}`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to update teacher:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useUpdateTeacher() {
  return useMutation("update_teacher", updateTeacher);
}