import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import Cart from "../components/Cart";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          <i class="fa fa-cog fa-spin text-light" style={{ fontSize: 25 }} />
          <NavLink to="/" className="text-decoration-none text-light mx-3 my-2">
            E-STORE
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="text-decoration-none text-light mx-3 my-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-decoration-none text-light mx-3 my-2"
            >
              About
            </NavLink>
            <NavLink
              to="/size"
              className="text-decoration-none text-light mx-3 my-2"
            >
              Size Chart
            </NavLink>
            <NavLink
              to="/faq"
              className="text-decoration-none text-light mx-3 my-2"
            >
              FAQ's
            </NavLink>
            <NavLink
              to="/products"
              className="text-decoration-none text-light mx-3 my-2"
            >
              Products
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
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
          <Cart />
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
