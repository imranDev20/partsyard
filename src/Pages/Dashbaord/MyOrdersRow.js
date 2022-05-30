import React from "react";
import { Link } from "react-router-dom";
import DeleteOrderModal from "../Shared/DeleteOrderModal";

const MyOrdersRow = ({ id, image, partName, paid, transactionId, index }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">
                {partName?.length > 30
                  ? partName.substring(0, 30) + "..."
                  : partName}
              </div>
            </div>
          </div>
        </td>

        <td>
          <p className="badge badge-ghost">{!paid ? "Pending" : "Paid"}</p>
        </td>
        <td>
          {!paid && (
            <button className="btn btn-xs">
              <Link to={`/payment/${id}`}>Pay now</Link>
            </button>
          )}
          {!paid && (
            <label
              htmlFor="delete-order-modal"
              className="btn btn-ghost btn-xs ml-3"
            >
              Cancel
            </label>
          )}
          {paid && (
            <p className="badge badge-ghost badge-sm">{transactionId}</p>
          )}
          {<DeleteOrderModal id={id} />}
        </td>
      </tr>
    </>
  );
};

export default MyOrdersRow;
