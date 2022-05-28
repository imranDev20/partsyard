import React from "react";
import { useQuery } from "react-query";
import UsersRow from "./UsersRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
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
              <th>Name</th>
              <th>Make Admin</th>
              <th>Delete</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UsersRow
                key={user._id}
                email={user.email}
                index={index}
                role={user.role}
                refetch={refetch}
              />
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              {/* <th></th> */}
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
};

export default Users;
