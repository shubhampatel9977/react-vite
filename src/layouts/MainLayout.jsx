import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from './header/MainHeader';

const MainLayout = ({ children }) => {
    const navigate = useNavigate();
    return (
        <>
            <section>
                <MainHeader/>
                {children}
            </section>
        </>
    )
};

export default MainLayout;