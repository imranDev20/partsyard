import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";

import "swiper/css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);
  return (
    <section className="w-full my-20">
      <div className="container px-10 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          What the Clients Say
        </h2>
        <Swiper
          spaceBetween={2}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="py-5 px-3">
              <ReviewsCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
