import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "active text-lime-600" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/add-book"}
                  className={({ isActive }) =>
                    isActive ? "active text-lime-600" : ""
                  }
                >
                  Add Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/borrowed-book"}
                  className={({ isActive }) =>
                    isActive ? "active text-lime-600" : ""
                  }
                >
                  Borrowed Books
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost gap-0 text-2xl font-bold">
            Open<span className="text-lime-600">Librarian</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? " text-lime-600" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-book"}
                className={({ isActive }) => (isActive ? " text-lime-600" : "")}
              >
                Add Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/borrowed-book"}
                className={({ isActive }) => (isActive ? " text-lime-600" : "")}
              >
                Borrowed Books
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Login</Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Register</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
