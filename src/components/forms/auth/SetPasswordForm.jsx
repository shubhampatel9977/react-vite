import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthButton from "../../ui/buttons/AuthButton";
import { SetPasswordSchema } from "../../validations/AuthSchema";
import useSetNewPassword from "../../../hooks/auth/useSetNewPassword";


function SetPasswordForm({ userEmail }) {

    const navigate = useNavigate();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(SetPasswordSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        }
    });

    const { mutate: setNewPassword, isLoading } = useSetNewPassword();

    const onSubmit = (data) => {
        const payloadData = {
            email: userEmail,
            password: data?.password,
            confirmPassword: data?.confirmPassword,
        };
        try {
            setNewPassword(payloadData, {
                onSuccess: (data) => {
                    if (data?.success === true) {
                        reset();
                        navigate('/auth/login');
                        toast.success(data?.message);
                    } else {
                        toast.error(data?.message);
                    }
                },
                onError: (err) => {
                    toast.error(err?.message);
                    console.log("onError setNewPassword:", err);
                },
            });
        } catch (err) {
            console.error("Error setNewPassword:", err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" >
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Enter New Password
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="password"
                                    type="password"
                                    placeholder="Enter your new password"
                                    className={`block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? "ring-red-500 focus:ring-red-500" : ""
                                        }`}
                                />
                            )}
                        />
                        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
                    </div>
                </div> 
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Enter Confirm Password
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Enter your confirm password"
                                    className={`block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? "ring-red-500 focus:ring-red-500" : ""
                                        }`}
                                />
                            )}
                        />
                        {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>}
                    </div>
                </div>

                <div>
                    <AuthButton type="submit" isLoading={isLoading} name={"Set New Password"} />
                </div>
            </form>
        </>
    )
};

export default SetPasswordForm;