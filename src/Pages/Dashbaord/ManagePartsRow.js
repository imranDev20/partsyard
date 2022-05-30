import React from "react";

const ManagePartsRow = ({ index, price, image, name, available, minOrder }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <h3 className="">
              {name.length > 20 ? name.substring(0, 20) + "..." : name}
            </h3>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{available}</td>
      <td>{minOrder}</td>
      <td>
        <button className="btn btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default ManagePartsRow;
