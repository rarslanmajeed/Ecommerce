import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { RMV, ADD, DLT, INC } from "./redux/actions/action";
const Header = () => {
  const [price, setPrice] = useState(0);
  const getData = useSelector((state) => state.cartreducer.carts);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(RMV(id));
    history("/");
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  const send1 = (e, v) => {
    if (v < 0) v = 1;
    else if (v > e.quantity) {
      v = e.quantity;
    }
    dispatch(INC(e, v));
  };

  const remove = (iteam) => {
    dispatch(DLT(iteam));
  };

  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price += ele.price * ele.qnty;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

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
              class="fa-solid fa-cart-shopping text-light"
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
          {getData.length ? (
            <div
              className="card-deatils"
              style={{ width: "24 rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "4.5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : $ {e.price}</p>
                            <div
                              className="mt-2 d-flex justify-content-between align-items-center"
                              style={{
                                width: 200,
                                cursor: "pointer",
                                color: "#111",
                              }}
                            >
                              Quantity:
                              <span
                                style={{ fontSize: 24 }}
                                onClick={
                                  e.qnty <= 1
                                    ? () => dlt(e.id)
                                    : () => remove(e)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 15 }}>
                                <Form
                                  style={{
                                    width: "50px",
                                    alignItems: "center",
                                  }}
                                  className="mt-2"
                                >
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Form.Control
                                      type="type"
                                      onChange={(el) =>
                                        send1(e, el.target.value)
                                      }
                                      value={e.qnty}
                                    />
                                  </Form.Group>
                                </Form>
                              </span>
                              <span
                                style={{ fontSize: 24 }}
                                onClick={() => send(e)}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <i
                              className="fa fa-trash largetrash"
                              onClick={() => dlt(e.id)}
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
              <tr>
                <td>
                  <NavLink to="/products" onClick={handleClose}>
                    <Button className="col-lg-8 mx-2" variant="light">
                      Continue Shopping
                    </Button>
                  </NavLink>
                </td>
                <td>
                  <strong>Total: </strong>$ {price}
                </td>

                <td>
                  <NavLink to="/order" onClick={handleClose}>
                    <Button className="col-lg-10 mx-2" variant="primary">
                      Next
                    </Button>
                  </NavLink>
                </td>
              </tr>
            </div>
          ) : (
            <div
              className="card_deatils d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
