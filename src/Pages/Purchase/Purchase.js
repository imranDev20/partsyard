import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import app from "../../firebase";

const auth = getAuth(app);

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);

  const preloadedUser = {
    name: user?.displayName,
    email: user?.email,
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: preloadedUser,
  });
  const { partId } = useParams();
  const [part, setPart] = useState({});

  useEffect(() => {
    const getPart = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/parts/${partId}`
      );

      setPart(response.data);
    };
    getPart();
  }, []);

  const handlePlaceOrder = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const phone = data?.phone;
    const orderAmount = data?.orderAmount;
    const address = data?.address;
    const partName = part?.name;
    const partImage = part?.image;

    const order = {
      name,
      email,
      phone,
      orderAmount,
      address,
      partName,
      partImage,
    };

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/orders`, order)
      .then(function (response) {
        console.log(response, "post request successfull");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <main className="container mx-auto px-10 my-10 ">
      <div className="mx-auto mb-10 flex max-w-2xl">
        <div className="card lg:card-side bg-base-100 shadow-xl w-fullmax-w-lg mx-auto">
          <figure>
            <img src={part.image} alt="Album" className="h-full object-cover" />
          </figure>
          <div className="card-body pb-16">
            <h2 className="card-title text-2xl">{part.name}</h2>
            <p className="text-4xl">${part.price}</p>
            <p>{part.description}</p>
            <p>Available: {part.available}</p>
            <p>Minimum Order: {part.minOrder}</p>
          </div>
        </div>
      </div>

      {user && (
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit(handlePlaceOrder)} noValidate>
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

            <div className="flex">
              {/* Phone */}
              <div className="form-control w-1/2 px-2">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone number..."
                  className="input input-bordered"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is required",
                    },
                    minLength: {
                      value: 11,
                      message: "Must be 11 characters",
                    },
                    pattern: {
                      value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                      message: "Provide a Bangladeshi number",
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Order Count */}
              <div className="form-control w-1/2 px-2">
                <label className="label">
                  <span className="label-text">Order amount</span>
                </label>
                <input
                  type="number"
                  min={part.minOrder}
                  name="orderAmount"
                  placeholder={`Minimum order: ${part?.minOrder}`}
                  className="input input-bordered"
                  {...register("orderAmount", {
                    required: {
                      value: true,
                      message: "Order can't be empty",
                    },
                    min: {
                      value: part?.minOrder,
                      message: `Must order more than ${part?.minOrder} items`,
                    },
                    max: {
                      value: part?.available,
                      message: `Only ${part?.available} items available`,
                    },
                  })}
                />
                <label className="label">
                  {errors.orderAmount?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.orderAmount.message}
                    </span>
                  )}
                  {errors.orderAmount?.type === "min" && (
                    <span className="label-text-alt text-red-500">
                      {errors.orderAmount.message}
                    </span>
                  )}
                  {errors.orderAmount?.type === "max" && (
                    <span className="label-text-alt text-red-500">
                      {errors.orderAmount.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="form-control  px-2">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your address..."
                className="input input-bordered"
                {...register("address", {
                  required: {
                    value: false,
                    message: "Address is required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>

            <span className="label-text-alt text-red-500"></span>

            <div className="form-control mt-6 uppercase px-2">
              <button type="submit" className={`btn  ${loading && "loading"}`}>
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default Purchase;
