import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Parts from "./Parts";
import Summary from "./Summary";

const Home = () => {
  return (
    <main>
      <Hero />
      <Parts />
      <Summary />
      <Reviews />
    </main>
  );
};

export default Home;
