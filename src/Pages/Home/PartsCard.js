import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PartsCard = ({
  id,
  name,
  description,
  price,
  minOrder,
  available,
  image,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name.length > 40 ? name.substring(0, 40) + "..." : name}
        </h2>
        <p className="text-gray-600 my-2">
          {description.length > 70
            ? description.substring(0, 70) + "..."
            : description}
        </p>
        <p className="text-3xl font-medium">${price}</p>
        <p>
          Minimum Order: <span className="text-red-600"> {minOrder}</span>
        </p>
        <p>
          Available: <span className="text-red-600"> {available} </span>
        </p>
        <div className="card-actions justify-end mt-5">
          <button
            onClick={() => navigate(`/purchase/${id}`)}
            className="btn bg-red-600 border-0 hover:bg-red-700 w-full outline-none"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
