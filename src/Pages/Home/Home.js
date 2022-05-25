import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Tools from "./Tools";
import Summary from "./Summary";

const Home = () => {
  return (
    <main>
      <Hero />
      <Tools />
      <Summary />
      <Reviews />
    </main>
  );
};

export default Home;
