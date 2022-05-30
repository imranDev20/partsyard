import React, { useEffect, useState } from "react";
import PartsCard from "./PartsCard";
import axios from "axios";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const getParts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/parts`
      );

      setParts(response.data);
    };
    getParts();
  }, []);

  return (
    <section>
      <div className="container mx-auto px-10 my-20">
        <h2 className="text-4xl font-bold text-center mb-5">
          Popular Moto Parts
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          See and choose from a wide variety of accessories and parts tailored
          to suit your needs. More than enough parts are available to suffice
          your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {parts.map((part) => (
            <PartsCard
              key={part._id}
              id={part._id}
              name={part.name}
              description={part.description}
              image={part.image}
              minOrder={part.minOrder}
              available={part.available}
              price={part.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parts;
