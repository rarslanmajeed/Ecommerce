import React from "react";
import Products from "./Products";

const Items = (props) => {
  return (
    <>
      {props.searchProduct.map((item) => {
        return <Products item={item} />; // The PRoduct Components is used to display the Products Available
      })}
    </>
  );
};

export default Items;
