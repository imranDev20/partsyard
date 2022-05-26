import React, { useState } from "react";
import PartsCard from "./PartsCard";

const Tools = () => {
  const [parts, setParts] = useState([]);

  async function getCharacters() {
    const response = await axios.get(
      "https://finalspaceapi.com/api/v0/character/?limit=2"
    );
    console.log(response.data);
  }
  getCharacters();

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
            <PartsCard key={tool.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
