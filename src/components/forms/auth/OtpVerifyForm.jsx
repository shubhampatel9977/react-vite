import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthButton from "../../ui/buttons/AuthButton";
import { OtpSchema } from "../../validations/AuthSchema";
import useOtpVerify from "../../../hooks/auth/useOtpVerify";


function OtpVerifyForm({ type, setFormStep, userEmail }) {

    const navigate = useNavigate();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(OtpSchema),
        defaultValues: {
            otp: '',
        }
    });

    const { mutate: otpVerify, isLoading } = useOtpVerify();

    const onSubmit = (data) => {
        const payloadData = {
            email: userEmail,
            otp: data?.otp,
        };
        try {
            otpVerify(payloadData, {
                onSuccess: (data) => {
                    if (data?.success === true) {
                        reset();
                        toast.success(data?.message);
                        if(type == 'register') {
                            navigate('/auth/login');
                        }
                        if(type == 'setPassword') {
                            setFormStep(2);
                        }
                    } else {
                        toast.error(data?.message);
                    }
                },
                onError: (err) => {
                    toast.error(err?.message);
                    console.log("onError otpVerify:", err);
                },
            });
        } catch (err) {
            console.error("Error otpVerify:", err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">
                        Enter OTP
                    </label>
                    <div className="mt-2">
                        <Controller
                            name="otp"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="otp"
                                    type="number"
                                    placeholder="Enter your 6 digit otp"
                                    className={`block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? "ring-red-500 focus:ring-red-500" : ""
                                        }`}
                                />
                            )}
                        />
                        {errors.otp && <p className="mt-2 text-sm text-red-600">{errors.otp.message}</p>}
                    </div>
                </div>

                <div>
                    <AuthButton type="submit" isLoading={isLoading} name={"Verify OTP"} />
                </div>
            </form>
        </>
    )
};

export default OtpVerifyForm;