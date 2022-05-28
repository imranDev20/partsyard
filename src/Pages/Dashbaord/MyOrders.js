import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import app from "../../firebase";

const auth = getAuth(app);
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

    // const email = user?.email;
    // const url = `${process.env.REACT_APP_SERVER_URL}/orders/filter?email=${email}`;
    // fetch(url, {
    //   method: "GET",
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => {
    //     console.log("res", res);
    //     return res.json();
    //   })
    //   .then((data) => console.log(data));
  }, [user]);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
              </th>
              <th>Parts Name</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>
                  {index + 1}
                  {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.partImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.partName}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {order?.orderAmount}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span> */}
                </td>
                <td>Paid</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Cancel</button>
                </th>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
