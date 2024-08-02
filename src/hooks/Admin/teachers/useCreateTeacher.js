import { useMutation } from "react-query";
import { axioAdminWithAuth } from "../../../libs/axioAdminWithAuth";

const createTeacher = async (data) => {
  try {
    const formData = new FormData();
    formData.append("profile", data?.profile);
    formData.append("name", data?.name);
    formData.append("age", data?.age);
    formData.append("college", data?.college);
    formData.append("description", data?.description);
    const response = await axioAdminWithAuth.post(`/admin/teacher`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to create teacher:", err);
    throw new Error(err?.response?.data?.message);
  }
};

export default function useCreateTeacher() {
  return useMutation("create_teacher", createTeacher);
}