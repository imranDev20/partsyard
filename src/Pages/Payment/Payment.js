import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4d6jJZT84KLAtmt6lQ4jAl2BJ6jGmjqTebie4PVqsCuZw6ZEMCQogZRbPlUGNfYkcskKy73iP9dWWPYQ1zrKyh00RDmX1F2X"
);

const Payment = () => {
  const { orderId } = useParams();
  const url = `${process.env.REACT_APP_SERVER_URL}/order/${orderId}`;

  const { data: order, isLoading } = useQuery(["payment", orderId], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <h1>Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm order={order} />
      </Elements>
    </div>
  );
};

export default Payment;
