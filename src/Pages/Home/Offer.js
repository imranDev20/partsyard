import React from "react";
import HelmetImage from "../../images/helmet.png";

const Offer = () => {
  return (
    <section className="w-full  relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/70 bg-[url('https://themebing.com/wp/motormania/wp-content/uploads/2021/01/coundown-banner.jpg')] bg-center">
      <div className="container mx-auto px-10 h-96 relative z-10">
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block md:h-[80%] lg:h-[110%] xl:h-[120%]"
          src={HelmetImage}
          alt=""
        />

        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="w-full text-center md:text-left md:w-1/3">
            <h2 className="text-white text-5xl w-full font-bold mt-20 leading-[1.5]">
              Limited time offer <br /> Get Your helmet
            </h2>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-white text-5xl w-full font-bold mt-20 leading-[1.5]">
              30% Discount <br /> On or preorders
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

//
