import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    const menuItems = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Blog</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    
    </>
    return (
        <div class="navbar bg-white font-mono text-xl px-12 text-zinc-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a href='.' class="btn btn-ghost text-zinc-800 normal-case text-xl">Parts Manufacturer Shop</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-gray-700">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/blogs">Blog</NavLink></li>
      <li><NavLink to="/portfolio">Portfolio</NavLink></li>
      <li>{user? <button className="btn btn-ghost text-xl"  onClick={logout} >Log Out</button> : <Link to="/login">Login</Link>}</li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;