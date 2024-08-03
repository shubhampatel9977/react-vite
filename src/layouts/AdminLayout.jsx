import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './sidebar/AdminSidebar';

const AdminLayout = ({ children }) => {
    const navigate = useNavigate();
    
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