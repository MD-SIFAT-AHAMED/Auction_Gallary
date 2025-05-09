import React from 'react';
import { RiNotification3Line } from "react-icons/ri";
import imgProfile from '../../assets/profile.png'
const Navbar = () => {
    return (
        <div className='w-full border-b border-base-300'>
            <div className="navbar max-w-screen-xl mx-auto bg-base-100 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <a className="text-xl md:text-3xl"><span className=' text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4">
                    <li className='text-lg font-normal'><a>Home</a></li>
                    <li className='text-lg font-normal'><a>Auctions</a></li>
                    <li className='text-lg font-normal'><a>Categories</a></li>
                    <li className='text-lg font-normal'><a>How to works</a></li>
                </ul>
            </div>
            <div className="navbar-end">
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg> */}
                    <RiNotification3Line size={25} />
                    <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div
                    tabIndex="0"
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={imgProfile} />
                    </div>
                </div>
                <ul
                    tabIndex="0"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;