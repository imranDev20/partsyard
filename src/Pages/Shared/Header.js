import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import Logo from "./Logo";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="w-full">
      <div className="navbar container mx-auto px-10 bg-base-100">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <Navigation />

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user && user?.photoURL
                        ? user?.photoURL
                        : "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                    }
                    referrerPolicy="no-referrer"
                  />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box uppercase "
              >
                <div className="flex flex-col justify-center items-center mb-5">
                  <div className="w-16 h-16  overflow-hidden mb-2">
                    <img
                      className="rounded-full"
                      src={
                        user && user?.photoURL
                          ? user?.photoURL
                          : "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                      }
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-medium text-lg">{user?.displayName}</h3>
                  <span className="lowercase text-xs">{user?.email}</span>
                </div>
                <li>
                  <Link to="/dashboard" className="justify-between">
                    <AiOutlineDashboard className="text-xl" /> Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="uppercase"
                    onClick={() => {
                      signOut(auth);
                      localStorage.removeItem("accessToken");
                    }}
                  >
                    <AiOutlineLogout className="text-xl" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost btn-circle drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
