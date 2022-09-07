import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" flex items-center justify-between w-full py-3 px-3 z-[100] absolute ">
      <Link to={"/"}   >
      <h1 className="text-red-600 text-4xl hover:cursor-pointer font-bold ">Netflix</h1>
      </Link>
      <div>
        <Link to="/login">
        <button className=" px-2 py-2 rounded  text-white font-medium">Sign In</button>
        </Link>
        <Link to="/signup">
        <button className="bg-red-700 px-2 py-2 rounded font-medium">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
