import { useQuery } from "react-query";
import { axioAdminWithAuth } from "../../../libs/axioAdminWithAuth";

const getTeacherById = async ({ queryKey }) => {
    try {
        const [_, techId] = queryKey;
        const response = await axioAdminWithAuth.get(`/admin/teacher/${techId}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get teacher by id:", err);
        throw new Error(err?.response?.data?.message);
    }
}

export default function useGetTeacherById(techId) {
    return useQuery(["get_teacher_by_id", techId], getTeacherById);
}