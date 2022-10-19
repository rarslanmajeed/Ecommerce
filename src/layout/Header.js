import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import Cart from "../components/Cart";

const Header = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = [
    { name: "Home", category: "home", id: 1 },
    { name: "About", category: "about", id: 2 },
    { name: "SizeChart", category: "size", id: 3 },
    { name: "FAQ's", category: "faq", id: 4 },
    { name: "Products", category: "products", id: 5 },
  ];

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          <i
            className="fa fa-cog fa-spin text-light"
            style={{ fontSize: 20, margin: "0 10px" }}
          />
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

          <Badge
            badgeContent={cartItems.length}
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 20, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Cart onClose={handleClose} />
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
