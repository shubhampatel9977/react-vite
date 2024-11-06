import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import MainLayout from "../../layouts/MainLayout";

const UserProtRoute = ({ children }) => {

    const userInfo = useSelector((state) => state?.loginUserData?.userInfo);

    if (userInfo === null || userInfo?.type !== "user") {
        return <Navigate replace to="/auth/login" />
    }

    return <MainLayout>{children}</MainLayout>;
};

export default UserProtRoute;