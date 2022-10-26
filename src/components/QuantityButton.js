import React from "react";
import { addItem, delItem, addCustomItem } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";

const QuantityButton = (props) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeCart = (item) => {
    dispatch(delItem(item));
  };

  const customAdd = (item, value) => {
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
        <Form
          style={{
            width: "50px",
            alignItems: "center",
          }}
          className="mt-2"
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="type"
              onChange={(el) => customAdd(props.element, el.target.value)}
              value={props.element.qnty}
            />
          </Form.Group>
        </Form>
      </span>
      <span style={{ fontSize: 24 }} onClick={() => addToCart(props.element)}>
        +
      </span>
    </div>
  );
};

export default QuantityButton;
