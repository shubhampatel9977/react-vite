import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import AuthButton from "../../ui/buttons/AuthButton";
import useLogin from "../../../hooks/auth/useLogin";
import { setAdminUserInfo } from '../../../store/slice/adminUserSlice';

// Define the validation schema with Yup
const schema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function AdminLoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mutate: userLogin, isLoading } = useLogin();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const payloadData = {
            email: data?.email,
            password: data?.password,
        };
        try {
            userLogin(payloadData, {
                onSuccess: (data) => {
                    if (data?.success === true) {
                        reset();
                        localStorage.setItem('adminAccessToken', data?.data?.accessToken);
                        localStorage.setItem('adminRefreshToken', data?.data?.refreshToken);
                        dispatch(setAdminUserInfo(data?.data?.userInfo));
                        navigate('/admin/');
                        toast.success(data?.message);
                    } else {
                        toast.error(data?.message);
                    }
                },
                onError: (err) => {
                    toast.error(err?.message);
                    console.log("onError userLogin:", err);
                },
            });
        } catch (err) {
            console.error("Error user user:", err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Enter Your Email"
                                    className={`block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? "ring-red-500 focus:ring-red-500" : ""
                                        }`}
                                />
                            )}
                        />
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div>
                        <div className="mt-2">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="Enter Your Password"
                                        className={`block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.password ? "ring-red-500 focus:ring-red-500" : ""
                                        }`}
                                    />
                                )}
                            />
                            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
                        </div>
                    </div>
                </div>

                <div>
                    <AuthButton type="submit" isLoading={isLoading} name={"Sign in"} />
                </div>
            </form>
        </>
    )
};

export default AdminLoginForm;