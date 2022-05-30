import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteOrderModal from "../Shared/DeleteOrderModal";

const OrdersRow = ({ email, index, partName, paid, id }) => {
  const [shipped, setShipped] = useState(false);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div>
          {partName.length > 30 ? partName.substring(0, 30) + "..." : partName}
        </div>
      </td>
      <td>
        <div className="">{email}</div>
      </td>
      <td>
        {paid ? (
          <button onClick={() => setShipped(true)} className="btn btn-xs">
            {shipped ? "Shipped" : "Pending"}
          </button>
        ) : (
          <button className="btn btn-ghost btn-xs">Unpaid</button>
        )}
      </td>
      <td>
        {!paid && (
          <label
            htmlFor="delete-order-modal"
            className="btn btn-ghost btn-xs ml-3"
          >
            Delete
          </label>
        )}
      </td>
      {<DeleteOrderModal id={id} />}
    </tr>
  );
};

export default OrdersRow;
