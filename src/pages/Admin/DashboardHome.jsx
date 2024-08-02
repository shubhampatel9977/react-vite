import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import SearchIcon from "../../assets/SVGs/SearchIcon";
import PlusIcon from "../../assets/SVGs/PlusIcon";
import useDebounce from '../../utils/useDebounce';
import TeacherTable from "../../components/tables/Admin/TeacherTable";
import Pagination from "../../components/common/Pagination";
import TeacherModal from "../../components/modals/Admin/TeacherModal";
import ConfirmModal from "../../components/modals/ConfirmModal";
import useGetAllTeachers from "../../hooks/Admin/teachers/useGetAllTeachers";
import useDeleteTeacher from "../../hooks/Admin/teachers/useDeleteTeacher";


function DashboardHome() {

    const queryClient = useQueryClient();
    const [rows, setRows] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [totalPages, setTotlePage] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [isUpdateData, setIsUpdateData] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isdeleteId, setIsDeleteId] = useState(null);

    const deSearchInput = useDebounce(searchInput);

    const { data: teachersData, isLoading } = useGetAllTeachers(deSearchInput, activePage, pageLimit);
    const { mutate:deleteTeacher, isLoading:isLoadingDelete } = useDeleteTeacher();

    useEffect(() => {
        if (teachersData?.data) {
            setRows(teachersData?.data?.teachersData);
            setTotlePage(teachersData?.data?.totalPage);
            setTotalEntries(teachersData?.data?.totalCount);
        }
    }, [teachersData?.data]);

    // pagination
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    // add / update teacher modal
    function closeModal() {
        setShowModal(false)
        setIsUpdateData(null);
    };
    function editHandler(data) {
        setShowModal(true);
        setIsUpdateData(data);
    }

    // delete teacher modal
    function closeDeleteModal() {
        setShowDeleteModal(false);
        setIsDeleteId(null);
    };
    function deleteHandler(id) {
        setShowDeleteModal(true);
        setIsDeleteId(id);
    };
    function confirmDelete() {
        try {
            deleteTeacher(isdeleteId, {
                onSuccess: (data) => {
                    if (data.success === true) {
                        queryClient.invalidateQueries("get_all_teachers");
                        setIsDeleteId(null);
                        setShowDeleteModal(false);
                        toast.success(data.message);
                    } else {
                        toast.error(data.message);
                    }
                },
                onError: (err) => {
                    toast.error(err.message);
                    console.log('onError delete teacher', err);
                },
            })
        } catch (err) {
            console.error('Error delete teacher', err);
        }
    }

    return (
        <>
            <div className="m-10">
                <header className="bg-primary-400 text-white py-4 px-6 rounded-lg flex items-center justify-between">
                    <h1 className="text-x font-semibold">All Teachers</h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                onChange={(e) => setSearchInput(e.target.value)}
                                className='bg-white border rounded-lg text-black border-white py-[7px] px-2 focus:outline-none focus:border-white hover:border-white'
                                placeholder='Search by teacher name'
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <SearchIcon width={20} height={20} />
                            </div>
                        </div>
                        <button onClick={() => setShowModal(true)} className="bg-primary-700 text-white py-2 px-4 rounded-lg flex items-center">
                            <PlusIcon className="mr-2" />
                            Add Teacher
                        </button>
                    </div>
                </header>
                <TeacherTable
                    loading={isLoading}
                    rows={rows}
                    updateEdit={editHandler}
                    updateDelete={deleteHandler}
                />
                <Pagination
                    currentPage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalEntries={totalEntries}
                    entriesPerPage={pageLimit}
                    setPageLimit={setPageLimit}
                    paginationOptions={[5, 10, 20, 30, 50]}
                />
                <TeacherModal
                    isOpen={showModal}
                    onClose={closeModal}
                    initialData={isUpdateData}
                />
                <ConfirmModal
                    heading="Delete"
                    subHeading="Are you sure you want to delete teacher?"
                    btnName="Delete Teacher"
                    isOpen={showDeleteModal}
                    isLoading={isLoadingDelete}
                    onClose={closeDeleteModal}
                    onConfirm={confirmDelete}
                />
            </div>
        </>
    )
};

export default DashboardHome;