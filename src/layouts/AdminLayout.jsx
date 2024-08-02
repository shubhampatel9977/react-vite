import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './sidebar/AdminSidebar';

const AdminLayout = ({ children }) => {
    
    const adminAccessToken = localStorage.getItem('adminAccessToken');
    const adminRefreshToken = localStorage.getItem('adminRefreshToken');

    // console.log('MainLayout-adminAccessToken ->', adminAccessToken);
    // console.log('MainLayout-adminRefreshToken ->', adminRefreshToken);

    const navigate = useNavigate();

    useEffect(() => {
        if(!adminAccessToken || !adminRefreshToken) {
            navigate("/auth/adminLogin");
        }
    },[adminAccessToken,adminRefreshToken]);

    return (
        <>
            <section className='flex'>
                <AdminSidebar />
                {children}
            </section>
        </>
    )
};

export default AdminLayout;