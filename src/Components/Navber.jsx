import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Authcontext } from '../Provider/AuthProvider';

const Navber = ({ theme }) => {
    const { user, logOut } = useContext(Authcontext);

    return (
<div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} w-full fixed top-0 left-0 right-0 z-10 `}>
<div className={`navbar  w-full md:w-11/12 mx-auto flex justify-center items-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} `}>

<div className="navbar-start">
    <div className="dropdown">
        <div tabIndex={0} role="button" className="btn mr-2 btn-ghost lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
        </div>
        <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
           <NavLink
            key="home"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/"
        >
            Home
        </NavLink>
        <NavLink
            key="allEquipment"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/equipment"
        >
            All Sports Equipment
        </NavLink>
        {
              user &&  <>
              <NavLink
            key="addEquipment"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/addequipment"
        >
            Add Equipment
        </NavLink>
              </>
                            }
                                                
        {
              user &&  <>
              <NavLink
            key="equipmentList"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/equipmentlist"
        >
            My Equipment List
        </NavLink>
              </>
        }
        
        <NavLink
            key="about"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/about"
        >
            About Us
        </NavLink>
        </ul>
    </div>
    <div className="flex justify-center items-center">
        <img src={logo} className="lg:w-12 w-10 h-10 lg:h-12 rounded-full" alt="Logo" />
        <a className={`btn btn-ghost font-bold md:text-2xl text-xl  ${theme === 'dark' ? 'text-red-600' : 'text-red-500'}`}>EquiSports</a>
    </div>
</div>

<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-3 px-1">
        <NavLink
            key="home"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/"
        >
            Home
        </NavLink>
        <NavLink
            key="allEquipment"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/equipment"
        >
            All Sports Equipment
        </NavLink>
        {
              user &&  <>
              <NavLink
            key="addEquipment"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/addequipment"
        >
            Add Equipment
        </NavLink>
              </>
                            }
                                                
        {
              user &&  <>
              <NavLink
            key="equipmentList"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/equipmentlist"
        >
            My Equipment List
        </NavLink>
              </>
        }
        
        <NavLink
            key="about"
            className={({ isActive }) => 
                `text-lg font-semibold ${isActive ? (theme === 'dark' ? 'text-red-600' : 'text-red-500') : ''}`}
            to="/about"
        >
            About Us
        </NavLink>
    </ul>
</div>

<div className="navbar-end gap-5">
    {user ? (
        <div className="flex gap-3 justify-center items-center">
            <img
                src={user?.photoURL || 'path/to/default-avatar.png'}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
                title={user?.displayName}
            />
        </div>
    ) : (
        <NavLink to="/register" className="btn text-base font-bold bg-red-500 rounded-full text-white">
            Register
        </NavLink>
    )}

    {user ? (
        <button className="btn text-base font-bold bg-red-500 rounded-full text-white" onClick={logOut}>
            Logout
        </button>
    ) : (
        <NavLink to="/login" className="btn text-base font-bold bg-red-500 rounded-full text-white">
            Login
        </NavLink>
    )}
</div>
</div>
</div>
    );
};

export default Navber;
