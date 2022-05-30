import React from "react";

const ReviewsCard = ({ review }) => {
  const { _id, name, email, avatar, text } = review;

  console.log(review);
  return (
    <div className="card shadow-lg px-7 py-10 flex flex-col items-center">
      <p className="text-center">{text}</p>
      <div className="w-20 h-20 overflow-hidden flex justify-center items-center rounded-full mt-7">
        <img
          className="w-full h-full object-cover"
          src={avatar}
          referrerPolicy="no-referrer"
        />
      </div>
      <h5 className="text-xl">{name}</h5>
      <p className="text-sm">{email}</p>
    </div>
  );
};

export default ReviewsCard;
