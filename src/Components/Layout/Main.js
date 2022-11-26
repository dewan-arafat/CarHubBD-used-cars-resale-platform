import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navber from '../Pages/Shared/Navber/Navber';


const Main = () => {
    return (
        <div className='relative'>
            <div className='fixed w-full'>
                <Navber></Navber>
            </div>
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Main;