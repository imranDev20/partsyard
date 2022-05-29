import React from "react";
import { Link } from "react-router-dom";
import DeleteOrderModal from "../Shared/DeleteOrderModal";

const MyOrdersRow = ({
  id,
  image,
  partName,
  email,
  paid,
  transactionId,
  index,
}) => {
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
              <div className="font-bold">{partName}</div>
              {/* <div className="text-sm opacity-50">United States</div> */}
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

{
  /* <label htmlFor="my-modal-3" className="btn modal-button">open modal</label>


<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div> */
}
