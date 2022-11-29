import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';
import useAdmin from '../../Hook/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useSeller from '../../Hook/useSeller';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

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

                        {
                            isSeller && <>
                                <li><Link to="/dashboard/wishlists">My Wishlist</Link></li>

                            </>
                        }



                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/sellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/buyers">All Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;