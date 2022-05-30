import React from "react";
import CustomLink from "./CustomLink";

const Navigation = () => {
  const routes = [
    { id: 1, label: "Home", link: "/" },
    { id: 3, label: "Portfolio", link: "/portfolio" },
    { id: 2, label: "Blog", link: "/blog" },
  ];
  return (
    <nav className="lg:flex mr-5 hidden">
      {routes.map((route) => (
        <CustomLink key={route.id} to={route.link}>
          {route.label}
        </CustomLink>
      ))}
    </nav>
  );
};

export default Navigation;
