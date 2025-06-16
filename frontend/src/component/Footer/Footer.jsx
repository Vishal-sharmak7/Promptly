import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
<footer className="w-full bg-black text-white font-[outfit] px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        <p className="text-lg sm:text-xl font-light">
          &copy; 2025 <span className="font-medium">Promptly</span> | Built with ❤️ by <span className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300">Vishal Sharma</span> 
        </p>

        <div className="flex gap-8">
          <a
            href="https://github.com/Vishal-sharmak7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 hover:-translate-y-1 transition-transform hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]  duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 hover:-translate-y-1 transition-transform hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]  duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="text-sm sm:text-base font-extralight">
          <p>Terms &nbsp; • &nbsp; Privacy</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
