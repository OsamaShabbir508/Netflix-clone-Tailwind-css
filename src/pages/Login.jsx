import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-auto h-auto  block relative">
      <div>
        <img
          className="w-full h-[600px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/a3e73768-e367-4f45-b205-f9dd8b45fb7e/PK-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="absolute flex top-0 left-0 bg-black/50 opacity-70 h-screen w-screen items-center justify-center">
       
      </div>
      <div className="absolute top-20 left-[450px] w-[350px] h-[500px] rounded-md flex flex-col p-[20px] bg-black/80 opacity-100 m-auto  items-center">
          <h1 className="text-white text-[30px] font-bold mr-[128px]  mb-4 mt-5">Sign In</h1>

          <input
            className="outline-none h-10 rounded-md bg-gray-600 w-[80%] px-3 mb-10 "
            type="email"
            placeholder="Email"
          />
          <input
            className="outline-none h-10 rounded-md bg-gray-600 w-[80%] px-3 mb-10"
            type="password"
            placeholder="Password"
          />
          <button className="h-10 mt-4 w-[80%] bg-orange-600 rounded-lg text-yellow-50 ">Sign in</button>
          <div className="text-gray-300 flex flex-row mt-2" >
            <input type="checkbox"/>Remember me
            <div  className="ml-10 ">
                Need Help?
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <h1 className="text-gray-500 text-[13px] font-bold">Don't have an account yet?</h1>
           <Link to="/signup"> <h2 className="text-white font-bold  pl-3">Sign Up</h2>
           </Link>
          </div>
        </div>
    </div>
  );
};

export default Login;
