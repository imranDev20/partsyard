import React from "react";
import CustomLink from "./CustomLink";

const Navigation = () => {
  const routes = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Purchase", link: "/purchase" },
    { id: 3, label: "Blog", link: "/blog" },
  ];
  return (
    <nav className="flex mr-5">
      {routes.map((route) => (
        <CustomLink key={route.id} to={route.link}>
          {route.label}
        </CustomLink>
      ))}
    </nav>
  );
};

export default Navigation;
