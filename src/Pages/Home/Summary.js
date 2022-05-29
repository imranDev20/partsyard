import React from "react";
import { AiFillCheckSquare, AiOutlineTags } from "react-icons/ai";
import { BsShieldCheck, BsAward } from "react-icons/bs";
import { GiFist } from "react-icons/gi";
import SummaryBlock from "./SummaryBlock";

const Summary = () => {
  const summaries = [
    {
      id: 1,
      title: "Reliability",
      number: 100,
      icon: <BsShieldCheck className="text-6xl mb-3 text-red-600" />,
      sign: "%",
    },
    {
      id: 2,
      title: "Years of Experience",
      number: 12,
      icon: <BsAward className="text-6xl mb-3 text-red-600" />,
      sign: "+",
    },
    {
      id: 3,
      title: "Brands",
      number: 26,
      icon: <AiOutlineTags className="text-6xl mb-3 text-red-600" />,
      sign: "+",
    },
    {
      id: 4,
      title: "Durability",
      number: 97,
      icon: <GiFist className="text-6xl mb-3 text-red-600" />,
      sign: "%",
    },
  ];
  return (
    <section className="w-full my-20 py-28 relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/70 bg-[url('https://images.unsplash.com/photo-1530784058407-a602dc957638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')] bg-center">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {summaries.map((summary) => (
          <SummaryBlock
            key={summary.id}
            title={summary.title}
            number={summary.number}
            icon={summary.icon}
            sign={summary.sign}
          />
        ))}
      </div>
    </section>
  );
};

export default Summary;
