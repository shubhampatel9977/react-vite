import { useQuery } from "react-query";
import { axiosWithAuth } from "../../libs/axiosWithAuth";

const getStudentById = async ({ queryKey }) => {
    try {
        const [_, studentId] = queryKey;
        const response = await axiosWithAuth.get(`/student/${studentId}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get student by id:", err);
        throw new Error(err?.response?.data?.message);
    }
}

export default function useGetStudentById(studentId) {
    return useQuery(["get_student_by_id", studentId], getStudentById);
}