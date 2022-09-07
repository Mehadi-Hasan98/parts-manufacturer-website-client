import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
      };

    const menuItems = <>

        <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/blogs">Blog</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        
         <li>{user? <button className="btn btn-ghost text-xl mb-2"  onClick={logout} >Log Out</button> : <Link to="/login">Login</Link>}</li>
        <li className='mt-3 text-red-500'>{user? user.displayName : ''}</li>
    
    </>
    return (
        <div className="navbar bg-base-300 font-mono text-xl text-zinc-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 text-zinc-800 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a href='.' className="btn btn-ghost text-zinc-800 normal-case text-2xl ml-6">GearBox</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-gray-700">
     {menuItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;