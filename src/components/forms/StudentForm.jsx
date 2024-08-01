import React, { useState } from 'react';
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageView from '../ui/ImageView';
import TextEditor from '../common/TextEditor';
import FormSubmitBtn from '../ui/buttons/FormSubmitBtn';
import FormCancelBtn from '../ui/buttons/FormCancelBtn';
import { setImagePath } from '../../utils/setImagePath';
import useCreateStudent from "../../hooks/students/useCreateStudent";
import useUpdateStudent from "../../hooks/students/useUpdateStudent";


// Define the validation schema with Yup
const schema = yup.object().shape({
    profile: yup.mixed().required('Image is required'),
    name: yup.string().required('Name is required'),
    age: yup.number().positive('Age must be a positive number').required('Age is required'),
    college: yup.string().required('University is required'),
    description: yup.string().required('Description is required'),
});

function StudentForm({ isUpdate, initialData, onClose }) {

    const queryClient = useQueryClient();
    const { mutate: createStudent, isLoading: createStudLoading } = useCreateStudent();
    const { mutate: updateStudent, isLoading: updateStudLoading } = useUpdateStudent();
    const [image, setImage] = useState(null);
    
    const { handleSubmit, control, reset, formState: { errors } } = useForm({resolver: yupResolver(schema),});
    
    const handleFileChange = (files) => {
        setImage(URL.createObjectURL(files[0]));
    };

    const onSubmit = (formData) => {
        const payload = {
            name: formData?.name,
            age: formData?.age,
            college: formData?.college,
            description: formData?.description,
        };

        if (isUpdate) {
            try {
                payload.id = initialData?._id
                if (image) {
                    payload.profile = formData?.profile[0]
                }
                updateStudent(payload, {
                    onSuccess: (data) => {
                        if (data.success === true) {
                            queryClient.invalidateQueries("get_all_students");
                            reset();
                            onClose();
                            toast.success(data.message);
                        } else {
                            toast.error(data.message);
                        }
                    },
                    onError: (err) => {
                        toast.error(err.message);
                        console.log('onError update Student', err);
                    },
                })
            } catch (err) {
                console.error('Error update Student:', err);
            }
        } else {
            try {
                payload.profile = formData?.profile[0]
                createStudent(payload, {
                    onSuccess: (data) => {
                        if (data.success === true) {
                            queryClient.invalidateQueries("get_all_students");
                            reset();
                            onClose();
                            toast.success(data.message);
                        } else {
                            toast.error(data.message);
                        }
                    },
                    onError: (err) => {
                        toast.error(err.message);
                        console.log('onError-create student', err);
                    },
                })
            } catch (err) {
                console.error('Error create student:', err);
            }
        }
    };

    return (
        <>
            {isUpdate && (<>
                <div className='flex justify-center'>
                    <div className='my-5 h-[100px]'>
                        <ImageView
                            src={image || setImagePath(initialData?.profile)}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </>)}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="profile" className="block text-left mb-2 text-sm font-medium text-gray-900">Student Profile*</label>
                        <Controller
                            name="profile"
                            control={control}
                            // rules={{ required: !isUpdate ? 'Pool image is required' : false }}
                            render={({ field }) => (
                                <input
                                    id="profile"
                                    type="file"
                                    name="profile"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    onChange={(e) => {
                                        handleFileChange(e.target.files);
                                        field.onChange(e.target.files);
                                    }}
                                />
                            )}
                        />
                        {errors.profile && <p className="text-left text-red-600 text-sm mt-1">{errors.profile.message}</p>}
                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor="name" className="block text-left mb-2 text-sm font-medium text-gray-900">Student Name*</label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={isUpdate ? initialData?.name : ""}
                            // rules={{ required: 'Pool name is required' }}
                            render={({ field }) => (
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Pool Name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.name && <p className="text-left text-red-600 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="age" className="block text-left mb-2 text-sm font-medium text-gray-900">Student Age*</label>
                        <Controller
                            name="age"
                            control={control}
                            defaultValue={isUpdate ? initialData?.age : ""}
                            // rules={{ required: 'Pool name is required' }}
                            render={({ field }) => (
                                <input
                                    id="age"
                                    type="number"
                                    name="age"
                                    placeholder="Enter Student Age"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.age && <p className="text-left text-red-600 text-sm mt-1">{errors.age.message}</p>}
                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor="college" className="block text-left mb-2 text-sm font-medium text-gray-900">Student University*</label>
                        <Controller
                            name="college"
                            control={control}
                            defaultValue={isUpdate ? initialData?.college : "running_pool"}
                            render={({ field }) => (
                                <select id='college' {...field} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5">
                                    <option value="SAGE University">SAGE University</option>
                                    <option value="DAVV University">DAVV University</option>
                                    <option value="IPS University">IPS University</option>
                                </select>
                            )}
                        />
                        {errors.college && <p className="text-left text-red-600 text-sm mt-1">{errors.college.message}</p>}
                    </div>

                </div>

                <div className='flex gap-8'>
                    <div className='w-full'>
                        <label htmlFor="description" className="block text-left mb-2 text-sm font-medium text-gray-900">How to Play</label>
                        <Controller
                            name="description"
                            control={control}
                            defaultValue={isUpdate ? initialData?.description : ""}
                            render={({ field }) => (
                                <TextEditor 
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        {errors.description && <p className="text-left text-red-600 text-sm mt-1">{errors.description.message}</p>}

                    </div>
                </div>

                <div className='flex gap-5'>
                    <FormSubmitBtn type="submit" isLoading={createStudLoading || updateStudLoading} name={isUpdate ? "Update Student" : "Add Student"} />
                    <FormCancelBtn onClick={onClose} name={"Cancel"} />
                </div>
            </form>
        </>
    )
};

export default StudentForm;