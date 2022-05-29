import React from "react";
import { useQuery } from "react-query";
import OrdersRow from "./OrdersRow";

const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`${process.env.REACT_APP_SERVER_URL}/orders`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return "Loading...";
  }

  return (
    <main>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
              </th>
              <th>Item Name</th>
              <th>Email</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow
                key={order._id}
                id={order._id}
                partName={order.partName}
                email={order.email}
                paid={order.paid}
                transactionId={order.transactionId}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>

          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </main>
  );
};

export default AllOrders;
