import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItem =
        <>
            <li><Link to='' className='text-stone-600 font-semibold text-xl  hover:text-teal-400 p-3'>Home</Link></li>
            <li><Link to='/about' className='text-stone-600 font-semibold text-xl  hover:text-teal-400 p-3'>Category</Link></li>
            <li><Link to='/appointment' className='text-stone-600 font-semibold text-xl hover:text-teal-400 p-3'>Blog</Link></li>
            <li><Link to='' className='text-stone-600 font-semibold text-xl  hover:text-teal-400 p-3'>Reviews</Link></li>
            <li><Link to='' className='text-stone-600 font-semibold text-xl  hover:text-teal-400 p-3'>Contact Us</Link></li>
        </>
    return (
        <div className="navbar bg-stone-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link className="font-body font-bold normal-case lg:text-2xl text-green-700">ResaleBD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal p-0">
                    {
                        menuItem
                    }
                </ul>
            </div>
            <div className="navbar-end lg:mr-14">
                <Link className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Log In</Link>
            </div>
        </div>
    );
};

export default Navber;