import React from 'react';
import ImageView from '../../ui/ImageView';
import { setImagePath } from "../../../utils/setImagePath";
import { formatISODate } from "../../../utils/formatDate";
import Tooltip from "../../common/Tooltip";
import LoaderIcon from '../../../assets/SVGs/Loader';
import UpdateIcon from '../../../assets/SVGs/UpdateIcon';
import DeleteIcon from '../../../assets/SVGs/DeleteIcon';
import dataNotFound from '../../../assets/images/data_not_found.jpg';
import defaultStudentIMG from '../../../assets/images/default_student_img.png';


const TeacherTable = ({ loading, rows, updateEdit, updateDelete }) => {

  function handleEdit(data) {
    updateEdit(data);
  }

  function handleDelete(id) {
    updateDelete(id);
  }

  if (loading)
    return <LoaderIcon />

  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-[#F8F9FB] w-full border-separate	border-spacing-y-2 ">
        <thead>
          <tr>
            <th className="px-6 align-middle py-3 text-base whitespace-nowrap font-semibold text-left">
              Profile
            </th>
            <th className="px-6 align-middle py-3 text-base whitespace-nowrap font-semibold text-left">
              Name
            </th>
            <th className="px-6 align-middle py-3 text-base whitespace-nowrap font-semibold text-left">
              Date
            </th>
            <th className="px-6 align-middle py-3 text-base whitespace-nowrap font-semibold text-left">
              Age
            </th>
            <th className="px-6 align-middle py-3 text-base whitespace-nowrap font-semibold text-left">
              College
            </th>
            <th className="px-6 align-middle py-3 text-base whitespace-nowrap font-semibold text-left">
              Description
            </th>
            <th className="px-6 align-middle py-3 text-base whitespace-nowrap font-semibold text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {rows?.length > 0 ? (
            rows?.map((item, index) => (
              <tr key={index} className='bg-white'>
                <td className="border-t-0 py-2 align-middle border-l-0 border-r-0 text-base whitespace-nowrap text-left text-blueGray-700 ">
                  <ImageView
                    src={setImagePath(item?.profile) || defaultStudentIMG}
                    className={"w-[100px] h-[50px] object-contain"}
                    alt="student image"
                  />
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 ">
                  {item?.name || "--"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 ">
                  { formatISODate(item?.createdAt) || "--"}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  {item?.age || "--"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  {item?.college || "--"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  {item?.description || "--"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  <div className='flex gap-3'>
                    <div className='cursor-pointer' onClick={() => handleEdit(item)}>
                      <Tooltip text={"Edit Teacher"}>
                        <UpdateIcon fill={"#1D4ED8"}/>
                      </Tooltip>
                    </div>
                    <div className='cursor-pointer'>
                      <Tooltip text={"Delete Teacher"}>
                        <DeleteIcon fill={"#1D4ED8"} onClick={() => handleDelete(item?._id)} />
                      </Tooltip>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className='pl-[45%]'>
                <ImageView
                  src={dataNotFound}
                  className="my-10"
                  width={100}
                  height={100}
                  alt="data not found"
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

export default TeacherTable;
