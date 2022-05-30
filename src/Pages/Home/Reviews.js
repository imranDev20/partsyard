import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";
import { Navigation, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Clients love us. We are proud to your number one choice and we hope to
          keep the commitment of providing quality parts and live upto our name.
        </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={2}
          slidesPerView={3}
          navigation
          pagination
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}

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
