import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="container mx-auto px-10">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h1>Dashboard</h1>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li>
              <Link to="/dashboard/my-orders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/add-review">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/my-orders">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
