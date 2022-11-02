import React from "react";
import { addItem, delItem, addCustomItem } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const QuantityButton = (props) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    // Redux Function to Add Item in Cart and Increment Quantity
    dispatch(addItem(item));
  };

  const removeCart = (item) => {
    // this function decrement the item quantity from cart
    dispatch(delItem(item));
  };

  const customAdd = (item, value) => {
    // Redux Function to manually add quantity of item in cart
    if (value <= 0) value = 1;
    else if (value > item.maxQuantity) {
      value = item.maxQuantity;
    }
    dispatch(addCustomItem(item, value));
  };
  return (
    <div
      className="mt-3 d-flex justify-content-between align-items-center"
      style={{
        width: 150,
        cursor: "pointer",
        color: "#111",
      }}
    >
      <span
        style={{ fontSize: 24 }}
        onClick={
          props.element.qnty <= 1
            ? () => {
                props.deleteCart(props.element.id);
              }
            : () => removeCart(props.element)
        }
      >
        -
      </span>
      <span style={{ fontSize: 15 }}>
        <input // input Manually the quantity of Item added in cart
          style={{
            width: "30px",
            alignItems: "center",
          }}
          className="mt-2"
          onChange={(el) => customAdd(props.element, el.target.value)}
          value={props.element.qnty}
        ></input>
      </span>
      <span style={{ fontSize: 24 }} onClick={() => addToCart(props.element)}>
        +
      </span>
    </div>
  );
};

export default QuantityButton;
