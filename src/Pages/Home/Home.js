import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Parts from "./Parts";
import Summary from "./Summary";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Parts />
      <Summary />
      <Reviews />
      {/* <Gallery /> */}
      <Contact />
    </main>
  );
};

export default Home;
