import React from "react";
import { Link } from "react-router-dom";
import { MdSportsMotorsports } from "react-icons/md";
const Logo = () => {
  return (
    <Link to="/" className="btn btn-ghost text-xl flex items-center uppercase">
      <MdSportsMotorsports className="mr-2 text-red-600 text-2xl" />
      PartsYard
    </Link>
  );
};

export default Logo;
