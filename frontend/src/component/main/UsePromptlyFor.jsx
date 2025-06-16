import React from "react";

const UsePromptlyFor = () => {
  const useCases = [
    {
      title: "Homework Help",
      description: "Quick explanations and summaries for school subjects.",
    },
    {
      title: "Idea Generation",
      description: "Brainstorm blog topics, startup ideas, or content hooks.",
    },
    {
      title: "Learning Concepts",
      description: "Understand tough topics like coding, math, or science.",
    },
    {
      title: "Writing Assistance",
      description: "Draft emails, improve grammar, or write essays & posts.",
    },
  ];
  return (
    <section className="py-16 px-6 text-white bg-black text-center font-[outfit]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-10 text-center">
        Use Promptly For:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {useCases.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-700 rounded-xl p-6 text-left shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-zinc-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsePromptlyFor;
