import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PartsCard = ({ id, name, description, price, minOrder, available }) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-full object-cover"
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
            onClick={() => navigate(`/purchase/${id}`)}
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
