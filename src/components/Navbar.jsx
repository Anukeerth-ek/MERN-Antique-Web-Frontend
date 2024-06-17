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

const Navbar = () => {
     //________ STATES __________
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isSticky, setIsSticky] = useState(false);

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

     return (
          <header>
               <nav>
                    <div className="flex justify-between items-center  md:text-black px-2 md:px-10 lg:px-15 py-4 flex-wrap border-b-2 ">
                         <Link to="/">
                              {" "}
                              <h3 className=" text-2xl  text-blue-600 flex">
                                   Antique
                                   <span className=" ml-1 relative font-semibold text-2xl text-black ">
                                        Vision
                                   </span>{" "}
                                   <GiNightVision className="absolute left-28 md:left-36 top-1" />{" "}
                              </h3>
                         </Link>

                         <Link to="/shop">
                              <div className="flex justify-between items-center border-none outline-none md:border md:border-black w-0 md:w-96  duration-300 lg:w-[480px] focus:lg:w-[600px] h-9 rounded-2xl">
                                   <input
                                        className="hidden md:block pl-2 py-5 rounded-md w-0 h-0 md:w-full md:h-full text-md   bg-gray-200 lg:w-full "
                                        placeholder="Whats on your mind?..."
                                   />
                                   <BsSearch className=" relative right-6 text-lg " />
                              </div>
                         </Link>

                         <BsSearch className=" relative  text-lg md:hidden" />  {/* This is for mobile responsive search icon */}
                         <div className={`${isMenuOpen ? "" : "hidden"} lg:inline`}>
                              <ul className="flex flex-col absolute right-3 lg:right-0 top-6 md:text-md lg:top-0 bg-white py-3 px-5 md:px-3 lg:p-0 gap-8 lg:flex lg:flex-row lg:relative">
                                   {navLinks.map(({ link, path }) => (
                                        <NavLink
                                             to={path}
                                             key={path}
                                             activeclassname="text-red-500 underline" // This class will be applied when NavLink is active
                                             className={({ isActive }) => (isActive ? "text-blue-700 " : "")}
                                        >
                                             <li className="hover:scale-95 scale-100 duration-300">{link}</li>
                                        </NavLink>
                                   ))}
                              </ul>
                         </div>

                         <Link to="/login">
                              <div className="border px-5 md:px-12 py-1 md:py-2 bg-white text-black md:text-white  md:bg-blue-600 md:hover:bg-transparent cursor-pointer border-blue-700 md:hover:border-blue-600 md:hover:bg-blue-700 md:hover:text-blue-600  rounded-lg md:block">
                                   <button className="transition-all duration-500 hover:custom-ease-class cursor-pointer ">
                                       {user ? 'Log out' : "Login"}
                                   </button>
                              </div>
                         </Link>
                         
                         {/* cart icons */}
                         <GiShoppingCart className="text-2xl"/>
                         {user && (
                              <div>
                                   <img  src={user ? user.photoURL : ""} className="w-7 rounded-full cursor-pointer"/>
                              </div>
                         )}

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
