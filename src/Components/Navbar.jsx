import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import ThemeToggle from "./ThemeToggle";
import logo from '../assets/athleonLogo.jpg'

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
 
  const links = (
    <>
      <li>
        <NavLink to="/" >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allsports" >
          All Sports Equipment
        </NavLink>
      </li>
      <li>
        <NavLink to="/addEquipment" >
          Add Equipment
        </NavLink>
      </li>
      {user?.email && <>
        <li>
        <NavLink to="/myEquipment" >
          My Equipment List
        </NavLink>
      </li>
      </>}
     {!user && <>
      <li>
      <NavLink to='/auth/login'>Login/Register</NavLink>
      
      </li>
      
      </>}
    </>
  );
  return (
    <div className="bg-gradient-to-b from-[#1caf76] via-[#23cc8b] to-[#82deba] text-white">
      <div className="navbar w-11/12 mx-auto p-4">
        <div className="navbar-start z-[1000]">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="rounded-full w-14" />
            <a className="text-xl font-medium">ATHLEON</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
        <ThemeToggle/>
        {user && user?.email ? (
         <div className="group relative inline-block">
         <img
           className="w-12 h-12 rounded-full object-cover cursor-pointer"
           src={user.photoURL}
           referrerPolicy="no-referrer"
           alt="Profile"
         />
         <div className="absolute z-[1000] right-0 mt-2 hidden w-48 bg-white shadow-lg rounded-lg group-hover:block">
           <div className="p-4">
             <p className="text-sm text-black font-medium">{user.displayName}</p>
           </div>
           <hr />
           <div className="p-2">
             <button
               className="w-full px-4 py-2 text-sm text-white bg-[#1caf76] rounded hover:bg-[#23cc8b]"
               onClick={logOut}
             >
               Logout
             </button>
           </div>
         </div>
       </div>

        ) : (
          <div>
            
          </div>
        )}
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
