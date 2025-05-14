import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='mt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;