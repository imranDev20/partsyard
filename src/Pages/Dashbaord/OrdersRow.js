import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrdersRow = ({
  email,
  index,
  partName,

  paid,
}) => {
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
    </tr>
  );
};

export default OrdersRow;
