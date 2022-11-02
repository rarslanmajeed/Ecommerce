// This Component displays the Details of Products on CardsDetail Page
import React from "react";

const ProductDetail = (props) => {
  return (
    <>
      <p>
        <strong>Price</strong> : $ {props.element.price}
      </p>
      <p>
        <strong>Brand</strong> : {props.element.brand}
      </p>
      <p>
        <strong>Rating : </strong>
        <span
          style={{
            background: "green",
            color: "#fff",
            padding: "2px 5px",
            borderRadius: "5px",
          }}
        >
          {props.element.rating} ★
        </span>
      </p>
      <p>
        <strong>Category : </strong>
        <span>{props.element.category}</span>
      </p>
      <p>
        <strong>Description</strong> : {props.element.description}
      </p>
      <p>
        <strong>Total</strong> : $ {props.element.price * props.element.qnty}
      </p>
      <p>
        <strong>Remove : </strong>
        <span>
          <i
            className="fas fa-trash"
            style={{
              color: "red",
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={() => props.deleteCart(props.element.id)}
          ></i>
        </span>
      </p>
      <strong>Quantity : </strong>
    </>
  );
};

export default ProductDetail;
