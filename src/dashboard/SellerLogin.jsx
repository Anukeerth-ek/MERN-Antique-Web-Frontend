import React from 'react'
import googleIcon from "../assets/google-icon.png";

const SellerLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
    <h1 className="font-bold text-2xl">Welcome to Antique Selling</h1>
    <form className="flex flex-col bg-white rounded shadow-lg p-12 " action="" >
         <label className="font-semibold text-xs" htmlFor="usernameField">
              Email
         </label>
         <input
              className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              name="email"
              id="email"
              placeholder="username@gmail.com"
         />
         <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
              Password
         </label>
         <input
              className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="password"
              name="password"
              id="password"
              placeholder="********"
              
         />
         <button className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
               Login
         </button>
         <div className="flex flex-col  mt-6 justify-center text-xs">
         {/* {error ? <p className="text-red-600 text-base">Email or password is incorrect!!</p> : ''} */}
              {/* <a className="text-blue-400 hover:text-blue-500 text-center text-sm mb-2" href="#">
                   Forgot Password?
              </a> */}
           
              <p className="text-sm">
                  Don't have an account?
                   <Link to="/sign-up" className="text-blue-600 font-bold text-sm hover:underline ml-2">
                        Sign Up
                   </Link>{" "}
              </p>
         </div>
         <span className="flex">
              {" "}
              <hr />{" "}
         </span>
         <button className="flex items-center justify-center mt-6 border px-10 py-2" >
              <img src={googleIcon} className="w-6 mr-2" />
              <span className="font-semibold">Login with google</span>
         </button>
         <div className="flex items-center mt-5">
         <input type="checkbox"/>
         <span className="ml-3">By continuing, I agree to the terms of use and privacy policy.</span>
         </div>
    </form>
    <hr />
</div>
  )
}

export default SellerLogin