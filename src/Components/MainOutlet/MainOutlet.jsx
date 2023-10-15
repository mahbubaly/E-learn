import React from 'react';
import Navbar from '../SharedPage/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer';

const MainOutlet = () => {
    return (
        <>
            <div>

                <Navbar />
                <Outlet />
                <Footer />

            </div>

        </>
    );
};

export default MainOutlet;