import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  
  

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Handle successful logout, if needed
      })
      .catch((error) => {
        // Handle logout error, if needed
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
    <div className="navbar bg-base-200 px-10 sticky top-0 z-10">
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
          className="w-[45px] h-[45px] rounded-full mr-2"
          src="https://i.ibb.co/nQm1XyJ/techlogo.jpg"
          alt=""
        />
        <p className="font-bold text-blue-700 text-2xl">Tech Trends</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
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
</div>
    </div>
  );
};

export default Navbar;


{/* <NavLink className="font-bold mr-3 bg-slate-400 py-3 px-3 rounded-md hover:bg-slate-300"  to='/myCart'>My Cart</NavLink> */}


// {
//   user ? 
//   <button onClick={handleSignOut} className="btn bg-base-100 hover:bg-slate-500 hover:text-white">Sign out</button>   
//   :
//   <Link to='/login'>
//       <button className="btn bg-base-100 hover:bg-slate-500 hover:text-white">Login</button>   
//   </Link>
// } */}