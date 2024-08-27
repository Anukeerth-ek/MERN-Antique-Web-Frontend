
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import googleIcon from "../assets/google-icon.png";
import { ThreeDots } from "react-loader-spinner";
const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showLoader, setShowLoader] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    // handle login
    const handleLogin = (event) => {
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;

        login(email, password).then((userCredential)=> {
            const user = userCredential.user;
  

            setTimeout(() => {
               navigate(from, {replace: true})
            }, 1800);
            setShowLoader(true)
        }).catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        })
    };

   //  LOGIN WITH GOOGLE 

   const handleRegister = ()=> {
     loginWithGoogle().then((result)=> {
       const user = result.user;
       alert("Sign up successfully!")
       navigate(from, { replace: true });
       
     }).catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setError(errorMessage);
  });
   }


  return (
    <div className="flex flex-col items-center justify-center mt-28">
    <h1 className="font-bold text-2xl">Welcome Back</h1>
    <form className="flex flex-col bg-white rounded shadow-lg p-12 " action="" onSubmit={handleLogin}>
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
         <button name="login-btn" className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
               {showLoader ?  <ThreeDots
                                                     visible={true}
                                                     height="20"
                                                     width="50"
                                                     color="white"
                                                     radius="6"
                                                     ariaLabel="three-dots-loading"
                                                     wrapperStyle={{}}
                                                     wrapperClass=""
                                                     /> : 'Login'}
         </button>
         <div className="flex flex-col  mt-6 justify-center text-xs">
         {error ? <p className="text-red-600 text-base">Email or password is incorrect!!</p> : ''}
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
         <button className="flex items-center justify-center mt-6 border px-10 py-2" onClick={handleRegister}>
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

export default Login