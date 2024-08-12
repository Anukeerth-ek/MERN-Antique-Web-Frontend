import React, { useContext } from "react";
import { TiTick } from "react-icons/ti";
import { AuthContext } from "../../contexts/AuthProvider";
const SuccessPage = () => {
     const { user } = useContext(AuthContext);

     const userName = user?.displayName;
     console.log(userName);
     return (
          <section className="w-full h-[90vh] flex items-center justify-center bg-gray-200">
               <div className="flex flex-col items-center justify-center text-center border w-[550px] h-[350px] py-2 px-8 bg-white">
                    <div className="mb-4 border rounded-full w-14 h-14 border-blue-500 flex items-center justify-center">
                         <TiTick className="text-blue-600 text-2xl" />
                    </div>
                    <div className="max-w-[340px]">
                         <h2 className="text-lg">Hey {userName},</h2>
                         <h1 className="text-2xl font-extrabold my-2">Your Order is Confirmed!!</h1>
                         <p>We'll send you the shipping confirmation email as soon as your order ships</p>
                         <button className="bg-blue-600 py-3 px-10 rounded-md text-white mt-5">Check Status</button>
                    </div>
               </div>
          </section>
     );
};

export default SuccessPage;
