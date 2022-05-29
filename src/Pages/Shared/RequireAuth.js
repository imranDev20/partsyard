import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase";
import ScaleLoader from "react-spinners/ScaleLoader";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <ScaleLoader color={"#16a34a"} loading={loading} size={60} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
