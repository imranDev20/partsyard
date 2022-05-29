import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";
import MyOrdersRow from "./MyOrdersRow";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        const email = user.email;
        const url = `${process.env.REACT_APP_SERVER_URL}/orders/filter?email=${email}`;
        await axios
          .get(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then(function (response) {
            console.log(response, "post request successfull");
            setOrders(response.data);
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
    getOrders();
  }, [user, navigate]);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Payment Status</th>
              <th>Transaction</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrdersRow
                key={order._id}
                id={order._id}
                image={order.partImage}
                partName={order.partName}
                email={order.email}
                paid={order.paid}
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

export default MyOrders;
