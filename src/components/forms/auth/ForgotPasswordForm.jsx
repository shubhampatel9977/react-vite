import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthButton from "../../ui/buttons/AuthButton";
import useForgotPassword from "../../../hooks/auth/useForgotPassword";

// Define the validation schema with Yup
const schema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
});

function ForgotPasswordForm({ setFormStep, setUserEmail }) {

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { mutate: forgotPassword, isLoading } = useForgotPassword();

    const onSubmit = (data) => {
        const payloadData = {
            email: data?.email,
        };
        try {
            forgotPassword(payloadData, {
                onSuccess: (data) => {
                    if (data?.success === true) {
                        reset();
                        toast.success(data?.message);
                        setUserEmail(payloadData?.email);
                        setFormStep(1);
                    } else {
                        toast.error(data?.message);
                    }
                },
                onError: (err) => {
                    toast.error(err?.message);
                    console.log("onError forgotPassword:", err);
                },
            });
        } catch (err) {
            console.error("Error forgotPassword:", err);
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
                    <AuthButton type="submit" isLoading={isLoading} name={"Send OTP"} />
                </div>
            </form>
        </>
    )
};

export default ForgotPasswordForm;