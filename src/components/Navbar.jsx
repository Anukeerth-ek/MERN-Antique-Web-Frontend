// importing hooks
import { useContext, useEffect, useState } from "react";

// importing files and links
import { navLinks } from "../utils/Data";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, NavLink } from "react-router-dom";

// Importing icons
import { CiMenuFries } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { GiNightVision } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import UserDetails from "./userDetails/UserDetails";
import { SearchContext } from "../contexts/SearchContext";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
     //________ STATES __________
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isSticky, setIsSticky] = useState(false);
     const [showUserInfo, setShowUserInfo] = useState(false);

     const { user } = useContext(AuthContext);

     // _____ToggleMenu____
     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     useEffect(() => {
          const handleScroll = () => {
               if (window.screenY > 100) {
                    setIsSticky(true);
               } else setIsSticky(false);
          };

          window.addEventListener("scroll", handleScroll);

          return window.addEventListener("scroll", handleScroll);
     }, []);

     const authenticationPath = {
          loginPath: "/login",
          logoutPath: "/logout",
     };

     // for handling the search
     const { setSearchTerm } = useContext(SearchContext);
     const handleSearchInput = (e) => {
          setSearchTerm(e.target.value);
     };

     return (
          <header>
               <nav>
                    <div className="flex justify-between items-center  md:text-black px-4 md:px-10 lg:px-15 py-4 flex-wrap border-b-2 ">
                         {/* Name */}
                         <Link to="/">
                          
                              <h3 className="text-xl md:text-2xl  text-blue-600 flex">
                                   Antique
                                   <span className=" ml-1 relative font-semibold text-xl md:text-2xl text-black ">Vision</span>{" "}
                                   <GiNightVision className="absolute left-28 md:left-36 top-1" />{" "}
                              </h3>
                         </Link>
                         {/* Input bar */}
                         <Link to="/shop">
                              <div className="flex justify-between items-center border-none outline-none md:border md:border-black w-0 md:w-96  duration-300 lg:w-[480px] focus:lg:w-[600px] h-9 rounded-2xl">
                                   <input
                                        className="hidden md:block pl-2 py-5 rounded-md w-0 h-0 md:w-full md:h-full border hover:border-blue-600 text-md bg-blue-50 lg:w-full "
                                        placeholder="Whats on your mind?..."
                                        onChange={handleSearchInput}
                                   />
                                   <BsSearch className=" relative right-6 text-lg " />
                              </div>
                         </Link>
                        <Link to={"/shop"}> <BsSearch className=" relative  text-lg md:hidden" />  </Link>    {/* This is for mobile responsive search icon */}
                    
                         <div className={`${isMenuOpen ? "" : "hidden"} lg:inline`}>
                              <ul className="flex flex-col absolute right-3 lg:right-0 top-6 md:text-md lg:top-0 bg-white py-3 px-5 md:px-3 lg:p-0 gap-6 lg:flex lg:flex-row lg:relative">
                                   {navLinks.map(({ link, path }) => (
                                        <NavLink
                                             to={path}
                                             key={path}
                                             activeclassname="text-red-500 underline" // This class will be applied when NavLink is active
                                             className={({ isActive }) => (isActive ? "text-blue-700 " : "")}
                                        >
                                             <li className=" hover:text-blue-700 hover:bg-gray-200 px-3 py-1 hover:shadow-lg rounded-md duration-300 ">
                                                  {link}
                                             </li>
                                        </NavLink>
                                   ))}
                              </ul>
                         </div>
                         {/* Login button */}
                         <Link to={user ? authenticationPath.logoutPath : authenticationPath.loginPath}>
                              <div className="border px-5 md:px-12 py-1 md:py-2 bg-white md:text-blue-600  cursor-pointer  duration-500 border-blue-700 md:hover:border-blue-500 md:hover:bg-blue-700 md:hover:text-white  rounded-lg md:block">
                                   <button className="  cursor-pointer ">{user ? "Logout" : "Login"}</button>
                              </div>
                         </Link>
                         {/* user icon (it will show only if user has logged in)*/}
                         {user && (
                              <div className="relative" onClick={() => setShowUserInfo(!showUserInfo)}>
                                   {user && user.photoURL ? (
                                        <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
                                   ) : (
                                        <span className="text-2xl cursor-pointer" title="Account">
                                             <FaRegCircleUser />
                                        </span>
                                   )}
                                   {showUserInfo && (
                                        <div className="absolute top-[52px] -right-9 bg-white shadow-lg rounded-lg z-10">
                                             <UserDetails />
                                        </div>
                                   )}
                              </div>
                         )}

                         {/* Favourite icon. This will display only when user logged in */}
                         {/* {user && <Link to="/wishlist"><div className="hidden lg:block text-lg cursor-pointer">
                                   <MdFavoriteBorder className="text-2xl"/>
                              </div></Link>} */}
                         {/* cart icons */}
                        {/* {user &&  <Link to="/cart" className="hidden lg:block">
                              <div>
                                   <GiShoppingCart className="text-2xl cursor-pointer" />
                              </div>
                         </Link>} */}
                         {/* Hamburger for mobile view */}
                         <div className="block md:block lg:hidden">
                              <button
                                   onClick={toggleMenu}
                                   className={`${
                                        isMenuOpen
                                             ? "absolute md:relative right-6 md:right-0 top-10 md:top-3 lg:top-0 text-black "
                                             : ""
                                   }`}
                              >
                                   {isMenuOpen ? <GiTireIronCross /> : <CiMenuFries />}
                              </button>
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Navbar;
