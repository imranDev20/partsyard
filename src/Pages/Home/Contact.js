import React from "react";
import { FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto px-10 ">
        <h2 className="text-4xl font-bold text-center mb-10">
          Leave us a message
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Feel free to send us your query. Our super expert technicians will
          reach you as soon as they finish their dota matches. Thanks for being
          patient.
        </p>

        <form action="">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 rounded-lg overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/70 bg-[url('https://images.unsplash.com/photo-1583008581453-4330952c66ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-center">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[70%] ">
                <div className="flex text-white items-center my-7">
                  <FaPhoneAlt className="mr-5 text-4xl" />
                  <div>
                    <h5 className="text-2xl font-medium">Call Us</h5>
                    <a href="tel:0921039210">0921039210</a>
                  </div>
                </div>
                <div className="flex text-white items-center my-7">
                  <FaEnvelopeOpen className="mr-5 text-4xl" />
                  <div>
                    <h5 className="text-2xl font-medium">Call Us</h5>
                    <a href="mailto:example@example.com">example@example.com</a>
                  </div>
                </div>
                <div className="flex text-white items-center my-7">
                  <FaMapMarkerAlt className="mr-5 text-4xl" />
                  <div>
                    <h5 className="text-2xl font-medium">Call Us</h5>
                    <p href="tel:0921039210">
                      1379 Shoreline Parkway, <br /> Mountain View, <br />
                      CA 94043, United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form action="" className="w-full lg:w-2/3 lg:p-10">
              <div className="flex">
                {/* Name field */}
                <div className="form-control w-1/2 px-2">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name..."
                    className="input input-bordered"
                  />
                </div>

                {/* Email */}
                <div className="form-control w-1/2 px-2">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name..."
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex">
                {/* Name field */}
                <div className="form-control w-1/2 px-2">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number..."
                    className="input input-bordered"
                  />
                </div>

                {/* Email */}
                <div className="form-control w-1/2 px-2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email..."
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control px-2">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Tell us what you want to say..."
                  rows="4"
                ></textarea>
              </div>

              <div className="form-control w-1/2 mx-auto px-2 mt-5">
                <button
                  className="btn bg-red-600 hover:bg-red-700 outline-none border-0 "
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
