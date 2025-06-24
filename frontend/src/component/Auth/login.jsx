import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { PiSmileyXEyesBold } from 'react-icons/pi';
import { BiHappyHeartEyes } from 'react-icons/bi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
   <>
   <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 text-white text-center font-[outfit] min-h-screen">
        <h1 className="text-[7rem] uppercase font-bold">LOGIN</h1>

        <form action="" >
          <div className="flex flex-col gap-5 items-center justify-center p-10">
            

            <input
              type="email"
              name="email"
             
              placeholder="Enter your Email"
              className="border border-white rounded-[10px] p-3 w-[25vw] italic focus:text-white"
            />

            <div className="relative w-fit">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                
                placeholder="Enter your Password"
                className="border border-white rounded-[10px] p-3 italic pr-10 w-[25vw] focus:text-white"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
              >
                {showPassword ? (
                  <PiSmileyXEyesBold className="cursor-pointer text-2xl" />
                ) : (
                  <BiHappyHeartEyes className="cursor-pointer text-2xl" />
                )}
              </button>
            </div>

            <button className="bg-white text-black text-sm sm:text-base rounded-full px-6 py-2 mt-6 font-[outfit] font-medium hover:bg-black border-2 border-white hover:text-white transition ease-in">
              Register
            </button>

            <i>Don't have an account? <Link to="/register" className="text-blue-600 underline text-[20px] hover:text-white transition ease-in">
               register
            </Link></i>
          </div>
        </form>
      </div>
      <Footer />
   </>
  )
}

export default Login