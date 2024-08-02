import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from './header/MainHeader';

const MainLayout = ({ children }) => {

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // console.log('MainLayout-accessToken ->', accessToken);
    // console.log('MainLayout-refreshToken ->', refreshToken);

    const navigate = useNavigate();

    useEffect(() => {
        if(!accessToken || !refreshToken) {
            navigate("/auth/login");
        }
    },[accessToken,refreshToken]);

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