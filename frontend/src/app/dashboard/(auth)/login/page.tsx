"use client";

import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="hidden xl:border-black xl:border-2 xl:h-screen xl:w-5/12 xl:flex xl:flex-col xl:justify-center xl:text-center">
        <p className="text-[40px]">wala pa ni</p>
      </div>
      <div className="h-screen w-7/12 flex flex-col items-center">
        <div className="w-full">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="w-10 h-10 mt-5 ml-8 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </a>
        </div>
        <div className="w-8/12 rounded-3xl mt-12 pt-16 pb-4 px-10 border-2 border-black">
          <div className="w-full">
            <p className="text-[30px] text-[#013237]">Log in to your Account</p>
            <p className="text-[20px]">Welcome back! Select method to log in</p>
          </div>
          <div className="w-full justify-center flex pt-10">
            <button className="border-2 border-black px-4 text-[30px] rounded-2xl mr-8 flex items-center">
              <img src="/images/google-logo.png" className="mr-5" alt="" />
              Google
            </button>
            <button className="border-2 border-black px-4 text-[30px] rounded-2xl ml-8 flex items-center">
              <img src="/images/facebook-logo.png" className="mr-5" alt="" />
              Facebook
            </button>
          </div>
          <div className="w-full pt-10 justify-center flex flex-row">
            <div className="border-b-2 w-4/12 border-black mb-4"></div>
            <p className="text-[25px] pt-2">or continue with</p>
            <div className="border-b-2 w-4/12 border-black mb-4"></div>
          </div>
          <div className="flex flex-col pt-10 w-full justify-center items-center">
            <form action="">
              <div className="relative">
                <div className="absolute top-2 left-4 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-envelope text-gray-400 w-10 h-10 text-3xl"></i>
                </div>
                <input
                  type="email"
                  className="mb-5 placeholder-gray-600 text-black text-[25px] border-t-[2px] border-b-[4px] border-t-[#4CA771] border-b-[#4CA771] rounded-full pl-28 focus:border-green-800 focus:outline-none shadow"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <div className="absolute top-2 left-4 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-lock text-gray-400 w-10 h-10 text-3xl"></i>
                </div>
                <input
                  type={show ? "text" : "password"}
                  className="mb-5 placeholder-gray-600 text-black text-[25px] border-t-[2px] border-b-[4px] border-t-[#4CA771] border-b-[#4CA771] rounded-full pl-28 focus:border-green-800 focus:outline-none shadow"
                  placeholder="Password"
                />
                <div className="absolute top-1 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                  <svg
                    className={`h-8 text-gray-700 ${show ? "hidden" : "block"}`}
                    onClick={() => setShow(!show)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                    ></path>
                  </svg>

                  <svg
                    className={`h-8 text-gray-700 ${show ? "block" : "hidden"}`}
                    onClick={() => setShow(!show)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                    ></path>
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <div className="pt-10 flex flex-col items-center">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="mr-2 w-8 h-8 cursor-pointer bg-[#C0E6BA] accent-[#C0E6BA] border-none"
              />
              <p className="text-[25px]">Remember me</p>
            </div>
            <p className="text-[25px] mt-3">Forgot Password</p>
          </div>
          <div className="flex flex-col items-center pt-10">
            <button
              type="submit"
              className="text-[30px] bg-[#C0E6BA] py-0.5 px-48 rounded-2xl"
            >
              Log in
            </button>
            <div className="pt-10">
              <p className="text-[30px]">
                Don't have an account?{" "}
                <a
                  className="text-[30px] text-[#4CA771]"
                  href="/dashboard/register"
                >
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
