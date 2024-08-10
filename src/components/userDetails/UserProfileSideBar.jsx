import React, { useContext } from "react";
import { userProfileSideBarData } from "../../utils/userProfileData";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsBoxSeam } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
const UserProfileSideBar = () => {
    const {user} = useContext(AuthContext)
     return (
          <aside>
               <div className="w-[300px] bg-gray-100">
                    <div className="flex items-center bg-white my-3 py-3 px-3">
                         <img src={user.photoURL ? user.photoURL : ''} alt="userImage" className="w-11 h-11 rounded-full" />
                         <span className="ml-3 font-normal text-lg">Hello,</span>
                         <span className="ml-2 font-semibold text-lg">{ user?.displayName ? user.displayName : ''}</span>
                    </div>

                    <div className="w-full bg-white">
                         <div className="flex items-center justify-between border-b-2 py-3">
                           
                                  
                                   <span className="flex items-center font-semibold  text-base text-gray-500 ml-4">
                                        <BsBoxSeam className="mr-4 text-xl text-blue-600" /> MY ORDERS
                                   </span>
                                   <RiArrowRightSLine className="mr-4 text-xl"/>
                            
                         </div>
                         {/* FIRST SECTION */}
                         <span className="flex items-center font-semibold  text-base text-gray-500 py-3">
                              <FaUser className="ml-4 text-2xl mr-4 text-blue-600"/>
                              ACCOUNT SETTINGS
                         </span>
                         <ul className="border-b-2">
                              {userProfileSideBarData[0].map((item, index) => (
                                   <li key={item.id} className="pl-16 py-2 w-full hover:text-blue-500 hover:bg-gray-100 cursor-pointer text-sm font-normal">
                                        {item.title}
                                   </li>
                              ))}
                         </ul>
                         {/* SECOND SECTION */}
                         <span className="flex items-center font-semibold  text-base text-gray-500 py-3">
                              <MdPayments className="ml-4 text-2xl mr-4 text-blue-600"/>
                              PAYMENTS
                         </span>
                         <ul className="border-b-2">
                              {userProfileSideBarData[1].map((item, index) => (
                                   <li key={item.id} className="pl-16 py-2 w-full hover:text-blue-500 hover:bg-gray-100 cursor-pointer text-sm font-normal">{item.title}</li>
                              ))}
                         </ul>
                         {/* THIRD SECTION */}
                         <span className="flex items-center font-semibold  text-base text-gray-500 py-3">
                              <RiAccountPinBoxFill className="ml-4 text-2xl mr-4 text-blue-600"/>
                              MY STUFF
                         </span>
                         <ul className="border-b-2">
                              {userProfileSideBarData[2].map((item, index) => (
                                   <li key={item.id} className="pl-16 py-2 w-full hover:text-blue-500 hover:bg-gray-100 cursor-pointer text-sm font-normal">{item.title}</li>
                              ))}
                         </ul>
                         <div className="inline-flex items-center py-3">
                         <AiOutlineLogout  className="ml-4 text-2xl  text-blue-600  -rotate-90"/>
                         <button className="flex items-center font-semibold  text-base text-gray-500 text-center pl-6 ">
                               LOGOUT
                         </button>
                         
                         </div>
                    </div>
               </div>
          </aside>
     );
};

export default UserProfileSideBar;
