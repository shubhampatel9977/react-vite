import React from 'react';
import MainHeader from './header/MainHeader';

const MainLayout = ({ children }) => {
    return (
        <>
            <section>
                <MainHeader/>
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </>
    )
};

export default MainLayout;