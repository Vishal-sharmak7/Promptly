import React, { useState } from "react";

import { PiSmileyXEyesBold } from "react-icons/pi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleInput = (e) => {
    const { name, value } = e.target;
    setregisterData({ ...registerData, [name]: value });
  };

  const userResgister = async (e) => {
    e.preventDefault();
    const { name, email, password } = registerData;
    if (!name || !email || !password) {
      toast.error("Please enter name, email, and password.");
    }
    try {
      const url = `${import.meta.env.VITE_REACT_URL}register`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        toast.success(message || "Regiter Successfully");
        setTimeout(() => navigate("/login"), 2000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "Registration failed";
        toast.error(details);
      } else {
        toast.error(message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Network or server error during registration.");
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 text-white text-center font-[outfit] min-h-screen">
        <h1 className="text-[7rem] uppercase font-bold">Register</h1>

        <form action="" onSubmit={userResgister}>
          <div className="flex flex-col gap-5 items-center justify-center p-10">
            <input
              type="text"
              name="name"
              value={registerData.name}
              onChange={handleInput}
              placeholder="Enter your Name"
              className="border border-white rounded-[10px] p-3 w-[25vw] italic focus:text-white"
            />

            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleInput}
              placeholder="Enter your Email"
              className="border border-white rounded-[10px] p-3 w-[25vw] italic focus:text-white"
            />

            <div className="relative w-fit">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={registerData.password}
                onChange={handleInput}
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

            <i>Already have an account? <Link to="/login" className="text-blue-600 underline text-[20px] hover:text-white transition ease-in">
               Login
            </Link></i>
          </div>
        </form>
      </div>
     
    </>
  );
};

export default Register;
