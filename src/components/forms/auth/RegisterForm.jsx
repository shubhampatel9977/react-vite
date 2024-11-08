import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthButton from "../../ui/buttons/AuthButton"
import { RegisterSchema } from "../../validations/AuthSchema";
import useRegister from "../../../hooks/auth/useRegister";


function RegisterForm({ setFormStep, setUserEmail }) {

    const navigate = useNavigate();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const { mutate: userRegister, isLoading } = useRegister();

    const onSubmit = (data) => {
        const payloadData = {
            name: data?.name,
            email: data?.email,
            password: data?.password,
        };
        try {
            userRegister(payloadData, {
                onSuccess: (data) => {
                    if (data?.success === true) {
                        reset();
                        setFormStep(1);
                        setUserEmail(payloadData?.email);
                        navigate('/auth/login');
                        toast.success(data?.message);
                    } else {
                        toast.error(data?.message);
                    }
                },
                onError: (err) => {
                    toast.error(err?.message);
                    console.log("onError userRegister:", err);
                },
            });
        } catch (err) {
            console.error("Error register user:", err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Enter Your Name"
                                    className={`block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.name ? "ring-red-500 focus:ring-red-500" : ""
                                        }`}
                                />
                            )}
                        />
                        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                    </div>
                </div>

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

                <div>
                    <AuthButton type="submit" isLoading={isLoading} name={"Register"}/>
                </div>
            </form>
        </>
    )
};

export default RegisterForm;