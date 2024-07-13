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
               <div className={`duration-500 ${closeSidebar ? ' w-28' : ' w-[350px]'}`}>
                    <ul className="bg-white pt-10 pb-5 pl-5 duration-500">
                              <div className=" flex justify-between items-center mb-6">
                         <Link to="/">
                                  <div className="flex">
                                  <img
                                        src={
                                             user?.photoUrl
                                                  ? user.photoUrl
                                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpI-jRCBsbJuzXvVYUsqWM9Mketi1KxQh9bzrDMM7pvSlqHuuseLokmX3b2IP-PP5u2c&usqp=CAU"
                                        }
                                        className={`rounded-full   ${closeSidebar ? 'max-w-10' : ' w-12 object-fill'}`}
                                   />
                                   <h3 className={` text-base font-bold ${closeSidebar ? 'hidden' : 'block'}`}>Hi, {user?.email.split('@')[0]}</h3>
                                  </div>
                         </Link>
                                  { closeSidebar ?  <MdKeyboardArrowRight className=" text-3xl cursor-pointer" onClick={()=> setCloseSidebar(!closeSidebar)}/> : <MdOutlineKeyboardArrowLeft   className=" text-3xl cursor-pointer" onClick={()=> setCloseSidebar(!closeSidebar)}/>} 
                              </div>
                         {sideBar.map((item, index) => {
                              return (
                                   <Link to={item.path} key={index}>
                                        <p className={`text-gray-600 ml-2 text-xs font-semibold mb-2 ${closeSidebar ? ' invisible' : 'visible'}`}>{item.showFirstTitle && <span>OVERVIEW</span>}</p>
                                        <p className={`text-gray-600 ml-2 text-xs font-semibold mb-1  `}>{item.showSecondTitle && <span className={`${closeSidebar ? 'invisible' : 'visible '}`}>ACCOUNTS</span>}</p>

                                        <li
                                             className={`flex items-center gap-3 mb-[5px] cursor-pointer duration-300 hover:bg-gray-200 rounded-md ${closeSidebar ? 'pl-1 pr-1 py-3' : 'pl-2 pr-8 py-2 '}  ${
                                                  item.marginBottom ? " mb-12   " : ""
                                             } ${item.marginTop ? " mt-1" : ""}`}
                                        >
                                             <item.icons className=" text-xl items-center" />

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
