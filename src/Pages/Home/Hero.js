import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay, A11y, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[EffectFade, Navigation, Pagination, A11y, Autoplay]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        navigation
        pagination
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="h-[calc(100vh-66px)]"
      >
        <SwiperSlide className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-black/50">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt=""
          />
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 text-white max-w-2xl">
            <h2 className="text-white font-black text-8xl uppercase">
              Ride like a <span className="text-red-600">pro</span>
            </h2>
            <p className="text-xl leading-8">
              There is often a racing counterpart to each type, such as road
              racing and street bikes, or motocross including dirt bikes.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-black/70">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519307170597-2ac2f8f343a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt=""
          />
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 text-white max-w-2xl">
            <h2 className="text-white font-black text-8xl uppercase">
              Live for the <span className="text-red-600">Adventure</span>
            </h2>
            <p className="text-xl leading-8">
              There is often a racing counterpart to each type, such as road
              racing and street bikes, or motocross including dirt bikes.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-black/70">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1595822388819-468d10427c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt=""
          />
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 text-white max-w-2xl">
            <h2 className="text-white font-black text-8xl uppercase">
              Enjoy the <span className="text-red-600">Thrill</span>
            </h2>
            <p className="text-xl leading-8">
              There is often a racing counterpart to each type, such as road
              racing and street bikes, or motocross including dirt bikes.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
