import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import MainLayout from "../../layouts/MainLayout";

const UserProtRoute = ({ children }) => {

    const loginInfo = useSelector((state) => state?.loginUserData?.loginInfo);

    if (loginInfo === null || loginInfo?.userType !== "user") {
        return <Navigate replace to="/auth/login" />
    }

    return <MainLayout>{children}</MainLayout>;
};

export default UserProtRoute;