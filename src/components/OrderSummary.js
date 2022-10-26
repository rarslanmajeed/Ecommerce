import React from "react";

const OrderSummary = (props) => {
  return (
    <>
      <tr>
        <td>
          <img
            src={props.element.imgdata}
            style={{ width: "5rem", height: "3rem" }}
            alt=""
          />
        </td>
        <td>{props.element.rname}</td>
        <td>Price : $ {props.element.price}</td>
        <td>{props.element.qnty}</td>
      </tr>
    </>
  );
};

export default OrderSummary;
