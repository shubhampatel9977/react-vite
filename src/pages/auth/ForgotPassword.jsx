import React, { useState } from 'react'
import ForgotPasswordForm from '../../components/forms/auth/ForgotPasswordForm';
import OtpVerifyForm from '../../components/forms/auth/OtpVerifyForm';
import SetPasswordForm from '../../components/forms/auth/SetPasswordForm';

function ForgotPassword() {

    const [formStep, setFormStep] = useState(0);
    const [userEmail, setUserEmail] = useState(null);

    return (
        <>
            {formStep == 0 && (
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
                    </div>

                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                        <p className="text-center">Enter your email and we'll send you an OTP.</p>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <ForgotPasswordForm setFormStep={setFormStep} setUserEmail={setUserEmail} />
                    </div>
                </div>
            )};

            {formStep == 1 && (
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Verify OTP</h2>
                    </div>

                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                        <p className="text-center">Enter the OTP that has been sent to your email.</p>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <OtpVerifyForm type={'setPassword'} setFormStep={setFormStep} userEmail={userEmail} />
                    </div>
                </div>
            )};

            {formStep == 2 && (
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter New Password</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <SetPasswordForm userEmail={userEmail} />
                    </div>
                </div>
            )};
        </>
    )
}

export default ForgotPassword;