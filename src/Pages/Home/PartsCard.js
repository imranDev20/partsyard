import React from "react";
import { useNavigate } from "react-router-dom";

const PartsCard = ({ name, description, price, minOrder, available }) => {
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{minOrder}</p>
        <p>{available}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate("/purchase")}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
