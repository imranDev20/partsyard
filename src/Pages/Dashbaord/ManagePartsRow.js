import React from "react";
import DeletePartsModal from "../Shared/DeletePartsModal";

const ManagePartsRow = ({
  id,
  index,
  price,
  image,
  name,
  available,
  minOrder,
}) => {
  return (
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
            <h3 className="mb-1">
              {name.length > 20 ? name.substring(0, 20) + "..." : name}
            </h3>
            <div className="text-xs opacity-50">{id}</div>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{available}</td>
      <td>
        <label
          htmlFor="delete-order-modal"
          className="btn btn-ghost btn-xs ml-3"
        >
          Delete
        </label>

        {<DeletePartsModal id={id} name={name} />}
      </td>
    </tr>
  );
};

export default ManagePartsRow;
