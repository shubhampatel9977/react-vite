import { useQuery } from "react-query";
import { axiosWithAuth } from "../../libs/axiosWithAuth";

const getAllStudents = async ({ queryKey }) => {
    try {
        const [_, searchInput, page, limit] = queryKey;
        const response = await axiosWithAuth.get(`/student?name=${searchInput}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get all students:", err);
        throw new Error(err?.response?.data?.message);
    }
};

export default function useGetAllStudents(searchInput, page, limit) {
    return useQuery(["get_all_students", searchInput, page, limit], getAllStudents);
};
