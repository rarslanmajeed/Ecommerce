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

  const deleteCart = (id) => {
    dispatch(remove(id));
    history("/home");
  };

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const customAdd = (item, value) => {
    if (value < 0) value = 1;
    else if (value > item.maxQuantity) {
      value = item.maxQuantity;
    }
    dispatch(addCustomItem(item, value));
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
              {cartItems.map((element) => {
                return (
                  <>
                    <tr>
                      <td>
                        <NavLink
                          to={`/cart/${element.id}`}
                          onClick={props.onClose}
                        >
                          <img
                            src={element.imgdata}
                            style={{ width: "5rem", height: "4.5rem" }}
                            alt=""
                          />
                        </NavLink>
                      </td>
                      <td>
                        <p>{element.rname}</p>
                        <p>Price : $ {element.price}</p>
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
                              element.qnty <= 1
                                ? () => deleteCart(element.id)
                                : () => removeCart(element)
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
                                    customAdd(element, el.target.value)
                                  }
                                  value={element.qnty}
                                />
                              </Form.Group>
                            </Form>
                          </span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => addToCart(element)}
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
                          onClick={() => deleteCart(element.id)}
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
