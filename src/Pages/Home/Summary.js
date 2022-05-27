import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import SummaryBlock from "./SummaryBlock";

const Summary = () => {
  const summaries = [
    {
      id: 1,
      title: "Reliability",
      number: 100,
      icon: <AiFillCheckSquare className="text-4xl" />,
      sign: "%",
    },
    {
      id: 2,
      title: "Years of Experience",
      number: 12,
      icon: <AiFillCheckSquare className="text-4xl" />,
      sign: "+",
    },
    {
      id: 3,
      title: "Brands",
      number: 26,
      icon: <AiFillCheckSquare className="text-4xl" />,
      sign: "+",
    },
    {
      id: 4,
      title: "Durability",
      number: 97,
      icon: <AiFillCheckSquare className="text-4xl" />,
      sign: "%",
    },
  ];
  return (
    <section className="w-full my-20 bg-base-200 py-16">
      <div className="container mx-auto px-10 grid grid-cols-4">
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
