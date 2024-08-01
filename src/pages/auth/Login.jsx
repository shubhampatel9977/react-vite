import React from 'react'
import { Link } from 'react-router-dom';
import LogInForm from '../../components/forms/auth/LoginForm';

function Login() {
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign into your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LogInForm />
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have account?
                        <span className="ml-2">
                            <Link to="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;