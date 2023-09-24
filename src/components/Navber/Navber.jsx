/* eslint-disable react/jsx-no-undef */

import { NavLink } from "react-router-dom";



const Navber = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    return (



        <div className="navbar bg-base-100 mt-6 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {links}
                    </ul>
                </div>
                <img className="navbar-start w-28" src="https://i.ibb.co/LndL84t/Logo.png" alt="" />
            </div>
            <div className="navbar-end  ">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            
        </div>
    );
};

export default Navber;