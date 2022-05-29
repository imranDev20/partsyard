import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SummaryBlock = ({ title, number, icon, sign }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div
      className="text-center flex flex-col items-center text-white my-5 lg:my-0"
      ref={ref}
    >
      {icon}

      <CountUp
        start={0}
        end={inView ? number : 0}
        redraw={true}
        useEasing={true}
      >
        {({ countUpRef, start }) => {
          return (
            <div className="flex text-5xl font-medium my-2">
              <span ref={countUpRef} /> <span>{sign}</span>
            </div>
          );
        }}
      </CountUp>
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

export default SummaryBlock;
