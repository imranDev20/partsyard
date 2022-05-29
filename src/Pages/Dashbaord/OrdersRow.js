import React from "react";
import { Link } from "react-router-dom";

const OrdersRow = ({
  email,
  index,
  partName,
  refetch,
  id,
  transactionId,
  paid,
}) => {
  return (
    <tr>
      <th>
        {/* <label>
          <input type="checkbox" className="checkbox" />
        </label> */}
        {index + 1}
      </th>
      <td>
        <div>{partName}</div>
      </td>
      <td>
        <div className="">{email}</div>
      </td>
      <td>
        {/* Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span> */}

        <p className="badge badge-ghost">{!paid ? "Pending" : "Paid"}</p>
      </td>
      <td>
        {!paid && (
          <button className="btn btn-xs">
            <Link to={`/payment/${id}`}>Pay</Link>
          </button>
        )}
        {paid && <p className="badge badge-ghost badge-sm">{transactionId}</p>}
      </td>

      {/* <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th> */}
    </tr>
  );
};

export default OrdersRow;
