import React from "react";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  const tools = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <section>
      <div className="container mx-auto px-10 my-20">
        <h2 className="text-4xl font-bold text-center mb-10">Tools</h2>
        <div className="grid grid-cols-3">
          {tools.map((tool) => (
            <ToolsCard key={tool.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
