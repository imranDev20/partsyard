import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Parts from "./Parts";
import Summary from "./Summary";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Offer from "./Offer";

const Home = () => {
  return (
    <main>
      <Hero />
      <Parts />
      <Summary />
      <Reviews />
      <Offer />
      {/* <Gallery /> */}
      <Contact />
    </main>
  );
};

export default Home;
