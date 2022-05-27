import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Parts from "./Parts";
import Summary from "./Summary";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <main>
      <Hero />
      <Parts />
      <Summary />
      <Reviews />
      <Gallery />
    </main>
  );
};

export default Home;
