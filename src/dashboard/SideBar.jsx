import React, { useContext, useState } from "react";
import { sideBar } from "../utils/Data";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";

const SideBar = () => {
     const [closeSidebar, setCloseSidebar] = useState(false);

     // usecontext hook
     const { user } = useContext(AuthContext);
     console.log(user)

    

     return (
          <aside>
               <div className="duration-500">
                    <ul className="bg-white pt-10 pb-5 pr-5 pl-5 duration-500">
                              <div className=" flex justify-between items-center mb-6">
                         <Link to="/">
                                  <div className="flex">
                                  <img
                                        src={
                                             user?.photoUrl
                                                  ? user.photoUrl
                                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpI-jRCBsbJuzXvVYUsqWM9Mketi1KxQh9bzrDMM7pvSlqHuuseLokmX3b2IP-PP5u2c&usqp=CAU"
                                        }
                                        className="rounded-full w-10"
                                   />
                                   <h3 className={` text-base font-bold ${closeSidebar ? 'hidden' : 'block'}`}>Hi, {user?.displayName}</h3>
                                  </div>
                         </Link>
                                  { closeSidebar ?  <MdKeyboardArrowRight className=" text-2xl cursor-pointer" onClick={()=> setCloseSidebar(!closeSidebar)}/> : <MdOutlineKeyboardArrowLeft   className=" text-2xl cursor-pointer" onClick={()=> setCloseSidebar(!closeSidebar)}/>} 
                              </div>
                         {sideBar.map((item, index) => {
                              return (
                                   <Link to={item.path} key={index}>
                                        <p className={`text-gray-600 ml-2 text-xs font-semibold mb-2 ${closeSidebar ? ' invisible' : 'visible'}`}>{item.showFirstTitle && <span>OVERVIEW</span>}</p>
                                        <p className={`text-gray-600 ml-2 text-xs font-semibold mb-2  `}>{item.showSecondTitle && <span className={`${closeSidebar ? 'invisible' : 'visible '}`}>ACCOUNTS</span>}</p>

                                        <li
                                             className={`flex items-center gap-3 mb-[5px] cursor-pointer hover:bg-gray-200 rounded-md ${closeSidebar ? 'pl-1 pr-1 py-3' : 'pl-2 pr-8 py-2 '}  ${
                                                  item.marginBottom ? " mb-10   " : ""
                                             } ${item.marginTop ? " mt-2" : ""}`}
                                        >
                                             <item.icons className=" text-xl" />

                                             <span className={`${closeSidebar ? 'hidden pl-2 pr-8 py-2 duration-500' : 'block'}`}>{item.title}</span>
                                        </li>
                                   </Link>
                              );
                         })}
                    </ul>
               </div>
          </aside>
     );
};

export default SideBar;
