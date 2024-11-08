import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import AdminLayout from "../../layouts/AdminLayout";

const AdminProtRoute = ({ children }) => {

    const loginInfo = useSelector((state) => state?.loginUserData?.loginInfo);

    if (loginInfo === null || loginInfo?.userType !== "admin") 
        return <Navigate replace to="/auth/adminLogin" />

    return <AdminLayout>{children}</AdminLayout>;
};

export default AdminProtRoute;