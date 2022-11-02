import React from "react";

const EmptyCart = (props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "24rem", padding: 10, position: "relative" }}
    >
      <i // It is the close button displayed when cart is empty
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
  );
};

export default EmptyCart;
