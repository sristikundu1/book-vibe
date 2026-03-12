import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/listed-books">Listed Books</Link>
      </li>
      <li>
        <Link to="/pages-to-read">Pages To Read</Link>
      </li>
    </>
  );
  return (
    <div className="max-w-10/12 mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className=" text-xl text-[rgba(19,19,19,1)] font-bold">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{Links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn py-4 px-5 rounded-lg bg-[rgba(35,190,10,1)] text-white">
            Sign In
          </a>
          <a className="btn py-4 px-5 rounded-lg bg-[rgba(89,198,210,1)] text-white">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
