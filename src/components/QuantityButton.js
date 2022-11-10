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
      className="d-flex align-items-center"
      style={{
        width: 150,
        cursor: "pointer",
        color: "#111",
      }}
    >
      <td
        style={{ fontSize: 20, padding: 10 }}
        onClick={
          props.element.qnty <= 1
            ? () => {
                props.deleteCart(props.element.id);
              }
            : () => removeCart(props.element)
        }
      >
        -
      </td>
      <td style={{ fontSize: 15, padding: 10 }}>
        <input // input Manually the quantity of Item added in cart
          style={{
            width: "30px",
          }}
          className="mt-2"
          onChange={(el) => customAdd(props.element, el.target.value)}
          value={props.element.qnty}
        ></input>
      </td>
      <td
        style={{ fontSize: 20, padding: 10 }}
        onClick={() => addToCart(props.element)}
      >
        +
      </td>
    </div>
  );
};

export default QuantityButton;
