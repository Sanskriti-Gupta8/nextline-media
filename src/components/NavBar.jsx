import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const NavBar = ({ setSelectedCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCategoryClick = (category) => {
    setDropdownOpen(false);
    setTimeout(() => {
      setSelectedCategory("");
      setTimeout(() => {
        setSelectedCategory(category);
        navigate("/");
      }, 0);
    }, 0);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 text-white shadow-lg shadow-indigo-300/20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link
            to="/"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            Nextline News
          </Link>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-4 text-lg">
            {token ? (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition-all duration-300 hover:bg-indigo-700/40 ${
                        isActive ? "bg-indigo-700/50 text-white" : ""
                      }`
                    }
                  >
                    Blogs
                  </NavLink>
                </li>

                {/* Categories Dropdown */}
                <li className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-indigo-700/40 transition-all duration-300"
                  >
                    Categories
                    <svg
                      className={`w-3 h-3 transform transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute mt-2 right-0 w-48 bg-slate-800/90 backdrop-blur-sm text-gray-200 rounded-lg shadow-md transform transition-all duration-300 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <ul className="py-2 text-sm">
                      {[
                        "All",
                        "Entertainment",
                        "Business",
                        "Technology",
                        "Politics",
                        "Health",
                      ].map((category) => (
                        <li key={category}>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-indigo-700/40 rounded-md transition-colors duration-200"
                            onClick={() => handleCategoryClick(category)}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <NavLink
                    to="/leaderboard"
                    className="px-4 py-2 rounded-md hover:bg-indigo-700/40 transition-all duration-300"
                  >
                    Leaderboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/create"
                    className="px-4 py-2 rounded-md hover:bg-indigo-700/40 transition-all duration-300"
                  >
                    Create Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className="px-4 py-2 rounded-md hover:bg-indigo-700/40 transition-all duration-300"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md hover:bg-indigo-700/40 transition-all duration-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="px-4 py-2 rounded-md hover:bg-indigo-700/40 transition-all duration-300"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 rounded-md hover:bg-indigo-700/40 transition-all duration-300"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
