import React from "react";
import SplitText from "../component/gsap/SplitText";
import asset from "../../public/images/Untitled design.mp4";
import Navbar from "./GlassNavbar/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-black mb-[20px] flex flex-col-reverse text-center md:flex-row items-center justify-between px-[5vw] py-[8vh] gap-10 md:gap-20">
       
        <div className="w-full md:w-1/2">
          <h1>
            <SplitText
              text="Promptly"
              className="text-white text-[12vw] sm:text-[7rem] uppercase font-[outfit] font-bold text-center md:text-left"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>
          <p className="text-white text-sm sm:text-lg uppercase  font-[outfit] font-thin mt-2 text-center ml-8 md:text-left">
            Talk Smarter. Learn Faster.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className="bg-white mt-5 rounded-full px-6 py-2 ml-8 text-black font-[outfit] font-medium hover:scale-105 transition ease-in"
              onClick={() => navigate("/chat")}
            >
              TRY PROMPTLY
            </button>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src={asset}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="rounded-xl shadow-xl w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
