import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './nav.css';

const Dashboard = () => {
    return (
        <div className='flex px-0 min-h-screen'>
            <nav className='w-1/5 bg-white drop-shadow-md min-h-screen'>
                <ul className='flex flex-col text-gray-800 text-center'>
                    <NavLink to='/dashboard' >DashBoard</NavLink>
                    <NavLink to='/dashboard/profile' >Profile</NavLink>
                    <NavLink to='/dashboard/editProfile' >Edit Profile</NavLink>
                </ul>
            </nav>
            <div className='w-4/5'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;