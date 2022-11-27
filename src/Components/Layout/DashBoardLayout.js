import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';

const DashBoardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Bookings</Link></li>
                        {/* {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                            </>
                        } */}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;