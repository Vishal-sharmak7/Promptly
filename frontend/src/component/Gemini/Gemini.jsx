import React, { useEffect, useRef, useState } from "react";
import { LuUserRound, LuSend, LuLoader } from "react-icons/lu";
import axios from "axios";
import icon from "../../../public/images/fabicon.png";
import { useNavigate } from "react-router-dom";
import Register from "../Auth/Register";

const Gemini = () => {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [timerexpiry, settimerexpiry] = useState(false);
  const resultRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      settimerexpiry(true);
    }, 3*60*1000);
    return () => clearTimeout(timer);
  },[]);

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollTop = resultRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    const userPrompt = prompt;
    setPrompt("");
    setHasPrompted(true);

    setChatHistory((prev) => [
      ...prev,
      { role: "user", text: userPrompt },
      {
        role: "ai",
        text: (
          <p className="animate-spin inline-flex items-center justify-center p-1 rounded-full bg-gray-200 text-purple-600">
            <LuLoader />
          </p>
        ),
      },
    ]);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GEMINI_URL}`,
        {
          contents: [{ parts: [{ text: userPrompt }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.candidates[0].content.parts[0].text;

      setChatHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "ai", text: "" };
        return updated;
      });

      let i = 0;
      const typingInterval = setInterval(() => {
        setChatHistory((prev) => {
          const updated = [...prev];
          if (i < aiResponse.length) {
            updated[updated.length - 1] = {
              role: "ai",
              text: aiResponse.slice(0, i + 1),
            };
            i++;
          } else {
            clearInterval(typingInterval);
          }
          return updated;
        });
      }, 15);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      {!timerexpiry ? (<div className="flex flex-col min-h-screen bg-black font-[outfit]">
        <div className="sticky top-0 z-50 bg-gradient-to-br from-zinc-950 to-zinc-900  flex items-center justify-between text-white text-lg sm:text-xl p-4 sm:p-5 shadow-2xl shadow-blue-400/10">
          <p>PROMPTLY</p>

          <div className="flex gap-5">
            <button
              className="bg-white text-black text-sm sm:text-base rounded-full px-6  font-[outfit]  hover:bg-black border-2 border-white hover:text-white transition ease-in"
              onClick={() => navigate("/")}
            >
              Back
            </button>

            <h3 className="text-xl sm:text-2xl">
              <LuUserRound />
            </h3>
          </div>
        </div>

        {!hasPrompted && (
          <div className="max-w-[900px] w-full mx-auto ">
            <div className="text-3xl sm:text-4xl md:text-[56px] font-medium my-12 px-4 text-gray-400 text-wrap">
              <p>
                <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                  Hello, Learners
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
          </div>
        )}

        <div
          ref={resultRef}
          className="flex-1 overflow-y-auto w-full mt-4 max-w-[900px] mx-auto px-4 pb-[100px]"
        >
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 items-start mb-4 ${
                msg.role === "user" ? "text-white" : "text-white"
              }`}
            >
              <h3 className="pt-1 text-xl mt-2 ">
                {msg.role === "user" ? (
                  <LuUserRound />
                ) : (
                  <img
                    src={icon}
                    alt="AI"
                    className="w-7 h-7  object-contain"
                  />
                )}
              </h3>

              <pre className="whitespace-pre-wrap text-[10px] break-words px-4 py-3 rounded-2xl max-w-[80%] font-[outfit] bg-gradient-to-br from-zinc-950 to-zinc-900 text-white shadow-md">
                {msg.text}
              </pre>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-black w-full px-4 mt-10 max-w-[900px] mx-auto">
          <div className="flex items-center justify-between gap-4 bg-gray-100 rounded-full transition-shadow duration-300 focus-within:shadow-lg focus-within:shadow-blue-500/50">
            <input
              type="text"
              placeholder="Enter your prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-base sm:text-lg"
            />
            <div className="flex gap-4 sm:gap-6 text-lg px-4 py-4">
              <h3
                onClick={handleSend}
                className="cursor-pointer hover:text-blue-600"
              >
                <LuSend />
              </h3>
            </div>
          </div>
          <p className="text-xs text-center mt-4 font-light text-white">
            Promptly may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>):(
        <Register/>
      )}
    </>
  );
};

export default Gemini;
