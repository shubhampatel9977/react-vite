import React from 'react';
import MainHeader from './header/MainHeader';

const MainLayout = ({ children }) => {
    return (
        <>
            <MainHeader />
            {children}
        </>
    )
};

export default MainLayout;