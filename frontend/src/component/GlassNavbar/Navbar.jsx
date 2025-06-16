import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-5 z-50 mx-4 sm:mx-10 px-5 py-3 flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl">
      <h1 className="text-white text-xl sm:text-2xl font-[outfit] font-bold">
        PROMPTLY
      </h1>

      <button
        className="bg-white text-black text-sm sm:text-base rounded-full px-6 py-2 font-[outfit] font-medium hover:scale-105 transition-transform ease-in-out"
        onClick={() => navigate("/chat")}
      >
        TRY PROMPTLY
      </button>
    </div>
  );
};

export default Navbar;
