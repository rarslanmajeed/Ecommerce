import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, remove } from "../redux/actions/action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import QuantityButton from "./QuantityButton";

const Products = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the cart Items
  const isAdded = cartItems.find((item) => item.id === props.item.id); // returns if item is added in cart or not
  const addToCart = (item) => {
    // Redux Function to Add Item in Cart and Increment Quantity
    dispatch(addItem(item));
  };
  const deleteCart = (id) => {
    // this function remove the items from cart
    dispatch(remove(id));
  };
  return (
    <Card
      style={{ width: "22rem", border: "none" }}
      className="mx-2 mt-4 card_style"
      key={props.item.id}
    >
      <Card.Img
        variant="top"
        src={props.item.imgdata}
        style={{ height: "16rem" }}
        className="mt-3"
      />
      <Card.Body>
        <Card.Title>
          {props.item.rname}{" "}
          <span // Displays the Rating
            style={{
              background: "green",
              color: "#fff",
              padding: "2px 5px",
              borderRadius: "5px",
            }}
          >
            {props.item.rating} ★
          </span>
        </Card.Title>
        <Card.Text>
          <p>Price : $ {props.item.price}</p>
          <p>Brand: {props.item.brand}</p>
        </Card.Text>
        <div className="button_div d-flex justify-content-center">
          {props.item.maxQuantity >= 1 ? ( // Check if item is in Stock or not
            (isAdded && ( // check whether the item is in cart or not
              <QuantityButton element={props.item} deleteCart={deleteCart} /> // if item in cart then quantity button is displayed
            )) || (
              <Button // Add to Cart Button if Item is not in Cart
                variant="primary"
                onClick={() => addToCart(props.item)}
                className="col-lg-12"
              >
                Add to Cart
              </Button>
            )
          ) : (
            <h3>Out of Stock</h3> // Show if Item is not in Stock
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Products;
