import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AuthProtRoute = ({ children }) => {

    const loginInfo = useSelector((state) => state?.loginUserData?.loginInfo);

    if (loginInfo?.userType === "user")
        return <Navigate replace to="/" />

    if (loginInfo?.userType === "admin")
        return <Navigate replace to="/admin" />

    return children;
};

export default AuthProtRoute;