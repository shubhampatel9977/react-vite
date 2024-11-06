import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import AdminLayout from "../../layouts/AdminLayout";

const AdminProtRoute = ({ children }) => {

    const userInfo = useSelector((state) => state?.loginUserData?.userInfo);

    // console.log('AdminProtRoute', userInfo?.type === "admin")

    if (userInfo === null || userInfo?.type !== "admin") 
        return <Navigate replace to="/auth/adminLogin" />

    return <AdminLayout>{children}</AdminLayout>;
};

export default AdminProtRoute;