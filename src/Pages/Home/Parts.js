import React, { useEffect, useState } from "react";
import PartsCard from "./PartsCard";
import axios from "axios";

const Tools = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(`http://localhost:4000/parts`);
      console.log(response.data);
      setParts(response.data);
    }
    getCharacters();
  }, []);

  return (
    <section>
      <div className="container mx-auto px-10 my-20">
        <h2 className="text-4xl font-bold text-center mb-10">Tools</h2>
        <div className="grid grid-cols-3">
          {parts.map((part) => (
            <PartsCard key={part.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
