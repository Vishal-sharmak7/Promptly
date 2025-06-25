import React from "react";
import notfound from "../assets/pagenotfound.png";
import { Navigate, useNavigate } from "react-router-dom";

const Notfound = () => {
    const Navigate = useNavigate()
  return (
    <>
    <button
        className="bg-white text-black text-sm sm:text-base mb-0 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-full px-6 py-2 ml-8 mt-5 font-[outfit] font-medium hover:bg-black border-2 border-white hover:text-white transition ease-in"
        onClick={() => Navigate("/")}
      >
        Home
      </button>
      <img src={notfound} alt="" className="w-[725px] h-[665px]" />
      
    </>
  );
};

export default Notfound;
