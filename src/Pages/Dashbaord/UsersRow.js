import React from "react";

const UsersRow = ({ email, index, role, refetch }) => {
  const makeAdmin = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <tr>
      <th>
        {/* <label>
          <input type="checkbox" className="checkbox" />
        </label> */}
        {index + 1}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          {/* <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div> */}
          <div>
            <div className="">{email}</div>
            {/* <div className="text-sm opacity-50">United States</div> */}
          </div>
        </div>
      </td>
      <td>
        {/* Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span> */}
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Delete</button>
      </td>
      {/* <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th> */}
    </tr>
  );
};

export default UsersRow;
