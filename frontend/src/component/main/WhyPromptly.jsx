import React from "react";

const WhyPromptly = () => {
    const reasons = [
  {
    title: "Fast Responses",
    description: "Get instant, real-time answers to your questions.",
  },
  {
    title: "Easy to Use",
    description: "Clean, intuitive interface designed for everyone.",
  },
  {
    title: "Powered by AI",
    description: "Built on cutting-edge AI to provide smart, helpful replies.",
  },
  {
    title: "No Sign-up Needed",
    description: "Start chatting immediately without any login barrier.",
  },
];
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-950 to-zinc-900 text-white text-center font-[outfit]">
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[7rem] font-bold mb-12 text-center">
  Why Promptly?
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="border border-zinc-700 p-6 rounded-xl text-left hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default WhyPromptly;
