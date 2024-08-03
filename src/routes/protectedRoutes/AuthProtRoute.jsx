import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AuthProtRoute = ({ children }) => {

    const isLoginUser = useSelector((state) => state?.loginUserData?.isLoggedIn);

    const isAdminLoggedIn = useSelector((state) => state?.loginAdminUserData?.isAdminLoggedIn);

    if (isLoginUser)
        return <Navigate replace to="/" />

    if (isAdminLoggedIn)
        return <Navigate replace to="/admin" />

    return children;
};

export default AuthProtRoute;