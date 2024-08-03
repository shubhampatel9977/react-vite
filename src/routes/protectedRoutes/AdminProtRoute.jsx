import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import AdminLayout from "../../layouts/AdminLayout";

const AdminProtRoute = ({ children }) => {

    const isAdminLoggedIn = useSelector((state) => state?.loginAdminUserData?.isAdminLoggedIn);

    if (!isAdminLoggedIn)
        return <Navigate replace to="/auth/adminLogin" />

    return <AdminLayout>{children}</AdminLayout>;
};

export default AdminProtRoute;