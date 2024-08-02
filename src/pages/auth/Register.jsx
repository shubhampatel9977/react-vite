import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/forms/auth/RegisterForm';
import OtpVerifyForm from '../../components/forms/auth/OtpVerifyForm';

function Register() {

    const [formStep, setFormStep] = useState(0);
    const [userEmail, setUserEmail] = useState(null);

    return (
        <>
            {formStep == 0 && (
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Let’s start Register yourself</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <RegisterForm setFormStep={setFormStep} setUserEmail={setUserEmail} />
                        <p className="mt-5 text-center text-sm text-gray-500">
                            Have an account?
                            <span className="ml-2">
                                <Link to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            )}

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
                        <OtpVerifyForm type={'register'} userEmail={userEmail} />
                    </div>
                </div>
            )};
        </>
    )
}

export default Register;