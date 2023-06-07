import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  // Logout function

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  const navLists = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-black" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#49c5b6] text-white font-bold font-serif">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLists}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          Sunshine Summer Camp
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLists}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button className="btn btn-ghost" onClick={handleLogOut}>Log Out</button>
            <img
              className="rounded-full w-10 ml-3"
              src={user.photoURL}
              alt=""
            />
          </>
        ) : (
          <>
            <button className="btn btn-ghost"><Link to="/login">Login</Link></button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
