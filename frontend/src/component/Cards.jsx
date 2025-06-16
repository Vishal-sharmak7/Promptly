import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Header";
import Middle from "./Middle";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  }, []);

  const cardData = [
    {
      title: "Ask",
      subtitle: "Anything",
      image: "/images/1.png",
      desc: "From simple definitions to in-depth explanations — Promptly handles it all in seconds.",
    },
    {
      title: "Real-Time",
      subtitle: "Responses",
      image: "/images/2.png",
      desc: "No delays. Just fast, accurate answers powered by the latest AI technology.",
    },
    {
      title: "Continuously",
      subtitle: "Learning",
      image: "/images/3.png",
      desc: "Promptly gets better with time—adapting to provide smarter, more relevant responses.",
    },
    {
      title: "Personalized",
      subtitle: "Knowledge",
      image: "/images/4.png",
      desc: "Your chats are shaped around your context and style for tailored results.",
    },
  ];

  return (
    <>
      <Header />
      <h1 className="text-3xl sm:text-4xl text-white text-center uppercase font-[outfit] my-8">
        How It Works
      </h1>

      <div className="w-full px-4 sm:px-8 bg-black text-white flex flex-col items-center gap-12 py-[12vh] pb-[20vh]  ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card sticky top-[15vh] w-full bg-white text-black rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center  gap-8 p-8 sm:p-[8vh]"
          >
            <div>
              <h1 className="font-[outfit] font-bold text-start uppercase leading-none text-[5vw] sm:text-[4rem]">
                {card.title}
                <br />
                <span className="block text-[10vw] sm:text-[3rem] leading-[1]">
                  {card.subtitle}
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-6">
              <img
                src={card.image}
                alt={card.subtitle}
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-contain"
              />
              <p className="font-thin text-lg sm:text-2xl">{card.desc}</p>
            </div>
          </div>
        ))}

        {/* Final Banner */}
        <div className="card top-[15vh] w-full text-center text-white flex flex-col items-center justify-center gap-6 rounded-2xl py-[15vh] px-6">
          <h1 className="font-bold text-[12vw] sm:text-[8rem] uppercase flex flex-col items-center justify-center">
            <img
              src="/images/metal.gif"
              alt=""
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mb-4"
            />
            GEMINI CHAT
            <img
              src="/images/mb.gif"
              alt=""
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mt-4"
            />
          </h1>
        </div>
      </div>

      <Middle />
    </>
  );
};

export default Cards;
