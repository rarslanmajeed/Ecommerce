import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { remove } from "../redux/actions/action";
import EmptyCart from "./EmptyCart";
import QuantityButton from "./QuantityButton";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteCart = (id) => {
    dispatch(remove(id));
    navigate("/home");
  };

  const totalPrice = cartItems.reduce(
    (accumulator, object) => accumulator + object.price * object.qnty,
    0
  );

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
                        <QuantityButton
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
              <strong>Total: </strong>$ {totalPrice}
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
        <EmptyCart onClose={props.onClose} />
      )}
    </>
  );
};

export default Cart;
