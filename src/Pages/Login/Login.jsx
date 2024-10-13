import React from "react";
import logoImage from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-green-50 w-full h-screen">
      <div className="w-full h-screen flex items-center justify-center p-6">
        <div className="bg-[#fff] rounded-[4px] overflow-hidden border-[1px] w-full sm:w-2/3 md:w-[42%]">
          <h1 className="bg-primary text-[#fff] px-5  py-3">Login</h1>
          <div className="p-5">
            <div className="flex flex-col gap-3 mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="border-[1px] border-gray-300 py-2 px-3 rounded-[4px] focus:border-green-400 outline-none focus:ring-4 focus:ring-green-200 transition-all duration-150"
              />
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <label htmlFor="username">Password</label>
              <input
                type="password"
                className="border-[1px] border-gray-300 py-2 px-3 rounded-[4px] focus:border-green-400 outline-none focus:ring-4 focus:ring-green-200 transition-all duration-150"
              />
            </div>
            <div className="mb-5 flex gap-2">
              <input type="checkbox" />
              <label htmlFor="remember_me">Remember Me</label>
            </div>
            <div className="mb-4 flex gap-4 items-center">
              <button className="px-3 py-2 bg-primary text-[#fff] rounded-[4px] hover:shadow-lg transition duration-200">
                Login
              </button>
              <Link
                to={"/login"}
                className="text-green-500 hover:text-green-600 hover:underline"
              >
                Forgot Your Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-3 flex-wrap justify-center py-3">
        <span>&copy; 2024 Archi</span>
        <span> | </span>
        {/* TODO, change 'to' links */}
        <Link to={"/login"} className="text-green-500 hover:text-green-600">
          Terms and Conditions
        </Link>
        <span> | </span>
        <Link to={"/login"} className="text-green-500 hover:text-green-600">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Login;
