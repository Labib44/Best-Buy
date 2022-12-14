import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import useSeller from '../Hook/useSeller';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user}=useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email);
    const [isSeller]=useSeller(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link className='m-3' to='/dashboard/dashboard'>My Booking</Link></li>
                        <li><Link className='m-3' to='/dashboard/wishlist'>My Wishlist</Link></li>
                        {isAdmin &&
                            <>
                            <li><Link className='m-3' to='/dashboard/users'>All user</Link></li>
                            <li><Link className='m-3' to='/dashboard/addproducts'>Add Product</Link></li>
                            </>
                        }
                        {isSeller && 
                            <li><Link className='m-3' to='/dashboard/addproducts'>Add Product</Link></li>
                        }
                        
                    </ul>

                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;