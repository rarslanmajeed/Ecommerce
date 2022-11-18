import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { remove } from "../redux/actions/action";
import EmptyCart from "./EmptyCart";
import QuantityButton from "./QuantityButton";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the Items in Cart
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // this function remove the items from cart
  const deleteCart = (id) => {
    dispatch(remove(id));
    navigate("/home");
  };

  // this function calculate the total amount of items added in cart
  const totalPrice = cartItems.reduce(
    (accumulator, object) => accumulator + object.price * object.qnty,
    0
  );

  return (
    <>
      {cartItems.length ? ( // check if there is something in cart or not
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
                // this map function is used to display items in Cart
                return (
                  <>
                    <tr>
                      <td>
                        <NavLink // this is to direct to Details Page
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
                        <QuantityButton // this Component display the increment and decrement button
                          element={element}
                          deleteCart={deleteCart}
                        />
                      </td>
                      <td
                        className="mt-5"
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                      >
                        <i // this is the delete button which remove item from Cart
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
                  Return
                </Button>
              </NavLink>
            </td>
            <td>
              <strong>Total: </strong>$ {totalPrice}
            </td>

            <td>
              <NavLink to="/cartProducts" onClick={props.onClose}>
                <Button className="col-lg-10 mx-2" variant="primary">
                  Next
                </Button>
              </NavLink>
            </td>
          </tr>
        </div>
      ) : (
        <EmptyCart onClose={props.onClose} /> //this Component display when Cart is Empty
      )}
    </>
  );
};

export default Cart;
