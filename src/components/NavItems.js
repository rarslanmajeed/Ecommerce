import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  const pages = [
    { name: "Home", category: "home", id: 1 },
    { name: "About", category: "about", id: 2 },
    { name: "SizeChart", category: "size", id: 3 },
    { name: "FAQ's", category: "faq", id: 4 },
    { name: "Products", category: "products", id: 5 },
  ];

  return (
    <Nav className="me-auto">
      {pages.map((type) => {
        return (
          <NavLink
            to={`/${type.category}`}
            key={type.id}
            className="text-decoration-none text-light mx-2"
          >
            {type.name}
          </NavLink>
        );
      })}
    </Nav>
  );
};

export default NavItems;
