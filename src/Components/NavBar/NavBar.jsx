import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'><a>Home</a></NavLink></li>
        <li>
         <NavLink to='/dashboard'> <a>Dashboard</a></NavLink>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><NavLink to='/products'><a>Products</a></NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-semibold">ShopiFY</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to='/'> <a>Home</a></NavLink></li>
      <li tabIndex={0}>
        <details>
          <summary>         <NavLink to='/dashboard'> <a>Dashboard</a></NavLink></summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><NavLink to='/products'><a>Products</a></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
      </nav>
    );
};

export default NavBar;