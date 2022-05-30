import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../firebase";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <main className="container mx-auto px-10">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pl-10">
          <h1 className="text-4xl mb-5 font-medium ">
            Welcome to Your Dashboard
          </h1>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {!admin && (
              <li>
                <Link to="my-orders">My Orders</Link>
              </li>
            )}

            {!admin && (
              <li>
                <Link to="add-review">Add Review</Link>
              </li>
            )}

            {admin && (
              <li>
                <Link to="users">All Users</Link>
              </li>
            )}

            {admin && (
              <li>
                <Link to="all-orders">Manage All Orders</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="add-parts">Add A Part</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
