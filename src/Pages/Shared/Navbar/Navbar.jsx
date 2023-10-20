/* eslint-disable no-unused-vars */
import { NavLink, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import '../../../assets/CSS/style.css'



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  
  
  // 1. Add dark mode state
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkModeValue());

  
  function getInitialDarkModeValue() {
    const storedValue = localStorage.getItem("darkMode");
    return storedValue === "true"; 
  }

  
const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
  localStorage.setItem("darkMode", !isDarkMode);

  
  if (isDarkMode) {
    document.body.classList.add("dark");
    document.body.classList.add("text-black"); // Add a class to change text color to black
  } else {
    document.body.classList.remove("dark");
    document.body.classList.remove("text-black"); // Remove the text color class
  }
};


  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);



  const handleLogout = () => {
    logOut()
      .then(() => {
        
      })
      .catch((error) => {
        
        console.error("Logout error", error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/brands">
          All Brands
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/addProducts">
          Add Products
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/about">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/contact">
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar bg-base-200 md:px-10 sticky top-0 z-10 ${isDarkMode ? "dark" : ""}`}>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="w-[45px] h-[45px] rounded-full mr-2 hidden md:block"
          src="https://i.ibb.co/nQm1XyJ/techlogo.jpg"
          alt=""
        />
        <p className="font-bold text-blue-700 text-2xl">Tech Trends</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
      
      <NavLink className="font-bold mr-3 bg-slate-400 py-3 px-3 rounded-md hover:bg-slate-300"  to='/myCart'>My Cart
      </NavLink>
        {user ? (
          <>
            
            <div className="gap-1 m-2">
                    <p>{user?.displayName}</p>
            </div>
            <div className="gap-1 m-2">
              <img className="w-10 rounded-full" src={user.photoURL} alt="" />
            </div>
            <div className="gap-1 m-2">
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <Link to="/signIn">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
       <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <span>
              <span className="feather-icon" data-feather="sun"></span> Light Mode
            </span>
          ) : (
            <span>
              <span className="feather-icon" data-feather="moon"></span> Dark Mode
            </span>
          )}
        </button>
        
    </div>
        </div>
      );
};

export default Navbar;



