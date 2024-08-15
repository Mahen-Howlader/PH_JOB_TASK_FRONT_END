import { FaHome } from "react-icons/fa";
import { GrDashboard, GrRestroomWomen } from "react-icons/gr";
import { LiaBabySolid } from "react-icons/lia";
import { MdDashboard, MdMenu, MdPeople } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="bg-white border-b-2 fixed w-full z-50 top-0 left-0">
            <div className="navbar  container mx-auto  flex items-center mb-1">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="lg:hidden mr-4  hover:text-indigo-400">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg> */}
                            <MdMenu size={30} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="  dropdown-content bg-base-100 z-40 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className="md:px-4 md:py-2 font-bold">

                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                                >
                                    <FaHome size={20} />

                                    <span>Home</span>
                                </NavLink>
                            </li>
                        
                        </ul>
                    </div>
                    <a className="text-3xl font-extrabold uppercase text-xl">Mahin</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        <li className="md:px-4 md:py-2 font-bold">

                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                            >
                                <FaHome size={20} />

                                <span>Home</span>
                            </NavLink>
                        </li>
                   


                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="order-2 md:order-3">
                        <NavLink to={"/login"} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                            {/* Heroicons - Login Solid */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p>Login</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;