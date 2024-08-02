import { useQuery } from "react-query";
import { axioAdminWithAuth } from "../../../libs/axioAdminWithAuth";

const getAllTeachers = async ({ queryKey }) => {
    try {
        const [_, searchInput, page, limit] = queryKey;
        const response = await axioAdminWithAuth.get(`/admin/teacher?name=${searchInput}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get all teachers:", err);
        throw new Error(err?.response?.data?.message);
    }
};

export default function useGetAllTeachers(searchInput, page, limit) {
    return useQuery(["get_all_teachers", searchInput, page, limit], getAllTeachers);
};
