import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UserProfileSideBar from "./UserProfileSideBar";

const UserProfile = () => {
     const { user } = useContext(AuthContext);
     console.log("user", user);
     // console.log("username", user.
     //   displayName ? 'hello' : 'no'
     //   )
     return (
          <section className="flex bg-gray-100">
            <div className=' ml-32 w-[300px] flex bg-gray-200'>
            <UserProfileSideBar/>
            
            </div>
               <div className="flex items-center justify-center mt-5 w-1/2 ">
                    <div className="shadow-md px-10 py-3 w-1/2">
                         {/* IMAGE AND TITLE SECTION */}
                       

                         {/* DETAIL SECTION */}

                         <form>
                              <div className="flex flex-col">
                              <label className="mb-1">Name</label>
                              <input type="text" placeholder= "name"  className="mb-4 border-gray-300 border-2 rounded-md"/>
                              {/* <label className="mb-1">About</label>
                              <textarea placeholder="Tell your story" className="mb-4 border-gray-300 border-2 rounded-md"/> */}
                              {/* <label className="mb-1">Website</label>
                              <input type="text" placeholder="Add a link to traffic your site" className="mb-4 border-gray-300 border-2 rounded-md"/> */}
                              <label className="mb-1">Username</label>
                              <input type="text" placeholder="Choose wisely so others can find your" className="mb-4 border-gray-300 border-2 rounded-md"/>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
};

export default UserProfile;
