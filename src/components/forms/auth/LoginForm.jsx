import React, { useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import AuthButton from "../../ui/buttons/AuthButton";
import useLogin from "../../../hooks/auth/useLogin";
import { setUserInfo } from '../../../store/slice/userSlice';
import OpenEyesIcon from "../../../assets/SVGs/OpenEyesIcon";
import CloseEyesIcon from "../../../assets/SVGs/CloseEyesIcon";

// Define the validation schema with Yup
const schema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function LogInForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const { mutate: userLogin, isLoading } = useLogin();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        const payloadData = {
            email: data?.email,
            password: data?.password,
        };
        try {
            userLogin(payloadData, {
                onSuccess: (data) => {
                    if (data?.success === true) {
                        if (data?.data?.userInfo?.type === "user") {
                            reset();
                            localStorage.setItem('accessToken', data?.data?.accessToken);
                            localStorage.setItem('refreshToken', data?.data?.refreshToken);
                            dispatch(setUserInfo(data?.data?.userInfo));
                            navigate('/');
                            toast.success(data?.message);
                        } else {
                            toast.error('You are admin not user, please login in admin portal.');
                        }
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
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="text-sm">
                            <Link to="/auth/forgotPassword" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                        </div>
                    </div>
                    <div>
                        <div className="relative mt-2">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        placeholder="Enter Your Password"
                                        className={`block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.password ? "ring-red-500 focus:ring-red-500" : ""
                                            }`}
                                    />
                                )}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                {showPassword ? <CloseEyesIcon /> : <OpenEyesIcon />}
                            </div>
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

export default LogInForm;