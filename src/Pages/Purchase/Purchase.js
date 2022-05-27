import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Purchase = () => {
  const { partId } = useParams();
  const [part, setPart] = useState({});

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/parts/${partId}`
      );
      console.log(response.data);
      setPart(response.data);
    }
    getCharacters();
  }, []);

  return (
    <main className="container mx-auto px-10 my-10 flex">
      <div className="w-8/12 pr-5">
        <div>
          <img
            className="w-full h-full object-cover rounded"
            src={part.image}
            alt=""
          />
        </div>
      </div>
      <div className="w-4/12 ">
        <form action="" className="shadow-md card py-7 px-5">
          <h2 className="text-xl font-medium mb-5">
            Fill in the necessary information
          </h2>
          <div className="flex mb-3">
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex mb-3">
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="017 0000 0000"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Item Count</span>
              </label>
              <input
                type="text"
                placeholder={`Minimum ${part.minOrder}`}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex mb-3">
            <div className="form-control w-full px-2">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="224 Baker Street, London, GB"
                className="input input-bordered w-full input-sm "
              />
            </div>
          </div>
          <div className="form-control mt-6 uppercase">
            <button type="submit" className={`btn`}>
              Place Order
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Purchase;
