import React, { useEffect, useState } from "react";
import AddReviewsRow from "./AddReviewsRow";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";
import { signOut } from "firebase/auth";
import axios from "axios";

const AddReviews = () => {
  const [paidOrders, setPaidOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(() => {
    const getPaidOrders = async () => {
      if (user) {
        const email = user.email;
        const url = `${process.env.REACT_APP_SERVER_URL}/payments/filter?email=${email}`;
        await axios
          .get(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then(function (response) {
            console.log(response, "post request successfull");
            setPaidOrders(response.data);
          })
          .catch(function (error) {
            console.log(error);
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              signOut(auth);
              localStorage.removeItem("accessToken");
              navigate("/");
            }
          });
      }
    };
    getPaidOrders();
  }, [user, navigate]);

  console.log(paidOrders);

  return (
    <div>
      <h2 className="text-xl text-red-600 my-10">
        You can only add a review for paid orders.
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {paidOrders.map((order, index) => (
              <AddReviewsRow
                key={order._id}
                id={order.partId}
                partName={order.partName}
                email={order.email}
                transactionId={order.transactionId}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddReviews;
