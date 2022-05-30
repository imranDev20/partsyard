import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddParts = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handlePlaceOrder = async (data) => {
    const name = data?.partName;
    const price = data?.price;
    const image = data?.partImage;
    const minOrder = data?.minOrder;
    const available = data?.available;
    const description = data?.description;

    const newPart = {
      name,
      price,
      image,
      minOrder,
      available,
      description,
    };

    console.log(newPart);

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/parts`, newPart)
      .then(function (response) {
        console.log(response, "post request successfull");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h2 className="text-2xl">Add a new part to the collection:</h2>
      <div className="max-w-lg mx-auto mt-5 mb-10">
        <form onSubmit={handleSubmit(handlePlaceOrder)} noValidate>
          <div className="flex">
            {/* Name field */}
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Part Name</span>
              </label>
              <input
                type="text"
                name="partName"
                placeholder="New part name..."
                className="input input-bordered"
                {...register("partName", {
                  required: {
                    value: true,
                    message: "The part's name is required",
                  },
                })}
              />
              <label className="label">
                {errors.partName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.partName.message}
                  </span>
                )}
              </label>
            </div>

            {/* Email */}
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="flex">
            {/* Phone */}
            <div className="form-control w-full px-2">
              <label className="label">
                <span className="label-text">Part Image</span>
              </label>
              <input
                type="text"
                placeholder="Part image URL..."
                className="input input-bordered"
                {...register("partImage", {
                  required: {
                    value: false,
                    message: "Part Image is required",
                  },
                })}
              />
              <label className="label">
                {errors.partImage?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.partImage.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="flex">
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Minimum order</span>
              </label>
              <input
                type="number"
                name="minOrder"
                placeholder={`Minimum order...`}
                className="input input-bordered"
                {...register("minOrder", {
                  required: {
                    value: true,
                    message: "Order can't be empty",
                  },
                })}
              />
              <label className="label">
                {errors.minOrder?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minOrder.message}
                  </span>
                )}
              </label>
            </div>

            {/* Order Count */}
            <div className="form-control w-1/2 px-2">
              <label className="label">
                <span className="label-text">Available parts</span>
              </label>
              <input
                type="number"
                name="available"
                placeholder={`Available parts...`}
                className="input input-bordered"
                {...register("available", {
                  required: {
                    value: true,
                    message: "Available amount can't be empty",
                  },
                })}
              />
              <label className="label">
                {errors.available?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.available.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="form-control w-full px-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              id=""
              placeholder="Part description..."
              className="textarea textarea-bordered"
              cols="30"
              rows="3"
              {...register("description", {
                required: {
                  value: true,
                  message: "Order can't be empty",
                },
              })}
            ></textarea>
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <span className="label-text-alt text-red-500"></span>

          <div className="form-control mt-6 uppercase px-2">
            <button type="submit" className="btn">
              Add part
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddParts;
