import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const AddReviewPage = () => {
  const { partId } = useParams();
  const [part, setPart] = useState({});
  const [user, loading, error] = useAuthState(auth);

  const preloadedUser = {
    name: user?.displayName,
    email: user?.email,
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: preloadedUser,
  });

  useEffect(() => {
    const getPart = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/parts/${partId}`
      );

      setPart(response.data);
    };
    getPart();
  }, [partId]);

  const handleAddReview = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const avatar = user?.photoURL;
    const text = data?.review;
    const partId = part?._id;
    const partName = part?.name;
    const partImage = part?.image;
    console.log(data);

    const reivew = {
      name,
      email,
      avatar,
      text,
      partName,
      partImage,
      partId,
    };

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/reviews`, reivew)
      .then(function (response) {
        console.log(response, "post request successfull");
      })
      .catch(function (error) {
        console.log(error);
      });

    reset();
  };

  return (
    <main className="max-w-5xl mx-auto px-10 my-10 ">
      <div className="flex flex-col lg:flex-row items-center mb-20">
        <div className="w-full md:w-1/3">
          <img src={part.image} alt="" />
        </div>
        <div className="md:pl-10 w-full lg:w-2/3">
          <h2 className="text-4xl font-medium">{part.name}</h2>
          <p className="my-5 text-2xl font-medium">
            Price:{" "}
            <span className="text-red-600 font-normal">${part.price}</span>
          </p>
          <p className=" text-lg font-medium">
            Available:{" "}
            <span className="text-red-600 font-normal">{part.available}</span>
          </p>
          <p className=" text-lg font-medium">
            Minimum Order:{" "}
            <span className="text-red-600 font-normal">{part.minOrder}</span>
          </p>
        </div>
      </div>

      {user && (
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit(handleAddReview)} noValidate>
            <div className="flex">
              {/* Name field */}
              <div className="form-control w-1/2 px-2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name..."
                  disabled
                  readOnly
                  className="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Email */}
              <div className="form-control w-1/2 px-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  readOnly
                  disabled
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="form-control px-2">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                className="textarea textarea-bordered	"
                name="review"
                placeholder="Add your review here..."
                rows={4}
                {...register("review", {
                  required: {
                    value: true,
                    message: "Review can't be empty",
                  },
                })}
              ></textarea>

              <label className="label">
                {errors.review?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.review.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control mt-6 uppercase px-2">
              <button type="submit" className={`btn  ${loading && "loading"}`}>
                Add Review
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default AddReviewPage;
