import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsRegistered(true);
    }
  }, []);

  return (
    <div className="m-10 p-10 rounded-lg shadow-sm font-[outfit] text-white grid place-content-center bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-700">
      <div className="mb-10">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">Ready to get started?</h1>
      </div>

      <p className="font-light text-base sm:text-lg text-center">
        Start asking your questions and discover answers like never before.
      </p>

      <div className="mt-8 text-center text-sm sm:text-base">
        Chat with Promptly Now
      </div>

      <div className="mt-5 flex gap-5 items-center justify-center text-center">
        <button
          className="bg-white text-black rounded-full hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] duration-300 px-6 py-2 font-medium font-[outfit] border-2 border-white hover:bg-black hover:text-white transition"
          onClick={() => navigate("/chat")}
        >
          TRY PROMPTLY
        </button>

        {!isRegistered && (
          <button
            className="bg-white text-black rounded-full hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] duration-300 px-6 py-2 font-medium font-[outfit] border-2 border-white hover:bg-black hover:text-white transition"
            onClick={() => navigate("/register")}
          >
            REGISTER
          </button>
        )}
      </div>
    </div>
  );
};

export default Cta;
