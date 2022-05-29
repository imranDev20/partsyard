import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Payment = () => {
  const { orderId } = useParams();
  const url = `${process.env.REACT_APP_SERVER_URL}/order/${orderId}`;

  const { data, isLoading } = useQuery(["payment", orderId], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return <div>Payment</div>;
};

export default Payment;
