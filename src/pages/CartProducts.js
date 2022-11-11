import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { remove } from "../redux/actions/action";
import QuantityButton from "../components/QuantityButton";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const CartProducts = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the Items in Cart
  const totalPrice = cartItems.reduce(
    (accumulator, object) => accumulator + object.price * object.qnty,
    0
  );
  const title = ["Photo", "Product", "Price", "Quantity"];
  const dispatch = useDispatch();
  const deleteCart = (id) => {
    // this function remove the items from cart
    dispatch(remove(id));
  };
  return (
    <div style={{ minHeight: "81vh" }}>
      <h2 className="text-center">Order Details</h2>
      <hr />
      <Table>
        <thead>
          <tr>
            {title.map((heading) => {
              return <th>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((element) => {
            // shows the items in cart
            return (
              <>
                <tr>
                  <td>
                    <img
                      src={element.imgdata}
                      style={{ width: "6rem" }}
                      alt=""
                    />
                  </td>
                  <td>{element.rname}</td>
                  <td>$ {element.price}</td>
                  <td>
                    <QuantityButton element={element} deleteCart={deleteCart} />
                  </td>
                </tr>
              </>
            );
          })}
          <tr>
            <td>
              <NavLink to="/products">
                <Button className="col-lg-8 mx-2" variant="dark">
                  Continue Shopping
                </Button>
              </NavLink>
            </td>
            <td></td>
            <td>
              <strong>Total: </strong>$ {totalPrice}
            </td>
            <td>
              {cartItems.length ? (
                <NavLink to="/details">
                  <Button className="col-lg-10 mx-2" variant="primary">
                    Proceed to Checkout
                  </Button>
                </NavLink>
              ) : (
                <NavLink to="/products">
                  <Button className="col-lg-8 mx-2" variant="dark">
                    Return
                  </Button>
                </NavLink>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CartProducts;
