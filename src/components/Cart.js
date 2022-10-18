import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import {
  addItem,
  delItem,
  addCustomItem,
  remove,
} from "../redux/actions/action";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();
  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(remove(id));
    history("/home");
  };

  const addToCart = (e) => {
    dispatch(addItem(e));
  };

  const customAdd = (e, v) => {
    if (v < 0) v = 1;
    else if (v > e.maxQuantity) {
      v = e.maxQuantity;
    }
    dispatch(addCustomItem(e, v));
  };

  const removeCart = (item) => {
    dispatch(delItem(item));
  };

  const price = cartItems.reduce((accumulator, object) => {
    return accumulator + object.price * object.qnty;
  }, 0);

  return (
    <>
      {cartItems.length ? (
        <div className="card-deatils" style={{ width: "24 rem", padding: 10 }}>
          <Table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((e) => {
                return (
                  <>
                    <tr>
                      <td>
                        <NavLink to={`/cart/${e.id}`} onClick={props.onClose}>
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
                                : () => removeCart(e)
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
                                    customAdd(e, el.target.value)
                                  }
                                  value={e.qnty}
                                />
                              </Form.Group>
                            </Form>
                          </span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => addToCart(e)}
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
              <NavLink to="/products" onClick={props.onClose}>
                <Button className="col-lg-8 mx-2" variant="light">
                  Continue Shopping
                </Button>
              </NavLink>
            </td>
            <td>
              <strong>Total: </strong>$ {price}
            </td>

            <td>
              <NavLink to="/order" onClick={props.onClose}>
                <Button className="col-lg-10 mx-2" variant="primary">
                  Next
                </Button>
              </NavLink>
            </td>
          </tr>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "24rem", padding: 10, position: "relative" }}
        >
          <i
            className="fas fa-close"
            onClick={props.onClose}
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
            src="/images/cart.gif"
            alt=""
            style={{ margin: "0 20px", width: "50px" }}
          />
        </div>
      )}
    </>
  );
};

export default Cart;
