import React from 'react';
import AdminSidebar from './sidebar/AdminSidebar';

const AdminLayout = ({ children }) => {
    return (
        <>
            <section className='flex'>
                <AdminSidebar />
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </>
    )
};

export default AdminLayout;
