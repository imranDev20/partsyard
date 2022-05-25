import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";

import "swiper/css";

const Reviews = () => {
  const reviews = [
    { id: 1, name: "Eblis", email: "eblis@hell.com" },
    { id: 1, name: "Saytan", email: "saytan@hell.com" },
    { id: 1, name: "Devil", email: "devil@hell.com" },
    { id: 1, name: "Lucifer", email: "lucifer@hell.com" },
  ];
  return (
    <section className="w-full">
      <div className="container px-10 mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewsCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
