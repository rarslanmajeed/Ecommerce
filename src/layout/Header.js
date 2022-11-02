import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import Cart from "../components/Cart";
import NavItems from "../components/NavItems";

const Header = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the Items in Cart
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    // function which open the Cart Menu
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // function to close the cart menu
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          <i // spin icon in Header
            className="fa fa-cog fa-spin text-light"
            style={{ fontSize: 20, margin: "0 10px" }}
          />
          <NavItems />
          <Badge // Tell the number of unique items in cart
            badgeContent={cartItems.length}
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i // icon to close the cart
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 20, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu // Material UI Menu for Cart
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
