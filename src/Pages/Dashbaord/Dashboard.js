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
        <div className="drawer-content">
          <h1 className="text-4xl mb-5 font-medium">Dashboard</h1>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            <li>{!admin && <Link to="/dashboard">My Orders</Link>}</li>

            <li>
              {!admin && <Link to="/dashboard/add-review">Add Review</Link>}
            </li>
            <li>
              <Link to="/dashboard/my-profile">My Profile</Link>
            </li>
            <li>{admin && <Link to="/dashboard/users">All Users</Link>}</li>
            <li>
              {admin && (
                <Link to="/dashboard/all-orders">Manage All Orders</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
