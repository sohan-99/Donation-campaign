/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { NavLink, useLocation } from "react-router-dom";



const Navber = () => {
    const path = useLocation().pathname
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    return (

        <div>
            <section className={`${path==="/"?"h-[500px]":""}  text-black bg-center bg-cover bg-blend-overlay  bg-white/75`} style={path === "/" ? { backgroundImage: 'url(https://i.ibb.co/dmCnLjt/Whats-App-Image-2023-09-25-at-12-47-42-PM.jpg)' } : { background: "none" }} >

                <div className="navbar  justify-between max-w-6xl mx-auto ">
                    <div className="navbar-start">
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
                    <div className="!navbar-end ml-96 hidden lg:!block ">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
                {
                    path==="/" &&    <div>

                    <h2 className="lg:text-5xl mt-20 md:text-3xl text-lg lg:font-bold md:font-medium font-medium text-black text-center ">I Grow By Helping People In Need</h2>
                    <div className="flex justify-center mt-7">
                        <input className=" input input-bordered join-item lg:w-[480px] md:w-[300px] w-[190px]" placeholder="Search here" />
                        <button className="lg:w-[110px] md:w-[125px] text-white w-[70px] btn  bg-[#FF444A]">Search</button>
                    </div>
                </div>
                }
             

            </section>
        </div>
    );
};

export default Navber;

