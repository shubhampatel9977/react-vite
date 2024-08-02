import React from 'react';
import AdminSidebar from './sidebar/AdminSidebar';

const AdminLayout = ({ children }) => {
    return (
        <>
            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 bg-primary-400 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <AdminSidebar />
            </aside>

            <div className="p-4 sm:ml-64">
                {children}
            </div>
        </>
    )
};

export default AdminLayout;