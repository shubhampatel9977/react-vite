import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AuthProtRoute = ({ children }) => {

    const userInfo = useSelector((state) => state?.loginUserData?.userInfo);

    if (userInfo?.type === "user")
        return <Navigate replace to="/" />

    if (userInfo?.type === "admin")
        return <Navigate replace to="/admin" />

    return children;
};

export default AuthProtRoute;