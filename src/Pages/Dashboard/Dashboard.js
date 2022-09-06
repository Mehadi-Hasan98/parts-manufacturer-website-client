import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from "react-router-dom";
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
      <div className="drawer drawer-mobile px-12">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <h2 className='text-2xl text-center font-bold text-purple-500 mb-10 mt-10'>Welcome to your Dashboard</h2> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu font-mono p-4 font-semibold overflow-y-auto w-64 bg-base-100 text-zinc-800">
            {/* <!-- Sidebar content here --> */}
            <li className='mb-2'>
              <NavLink to="/dashboard">My Profile</NavLink>
            </li>
            {!admin && (
              <>
                <li className='mb-2'>
                  <NavLink to="/dashboard/myorders">My Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addreview">Add Reviews</NavLink>
                </li>
              </>
            )}

            {admin && (
              <>
                <li className='mb-2'>
                  <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
                </li>
                <li className='mb-2'>
                  <NavLink to="/dashboard/addProducts">Add Products</NavLink>
                </li>
                <li className='mb-2'>
                  <NavLink to="/dashboard/manageProducts">
                    Manage Products
                  </NavLink>
                </li>
                <li className='mb-2'>
                  <NavLink to="/dashboard/manageOrders">
                    Manage All Orders
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;