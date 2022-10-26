import React from "react";
import Products from "./Products";

const Items = (props) => {
  return (
    <>
      {props.searchProduct.map((item) => {
        return <Products item={item} />;
      })}
    </>
  );
};

export default Items;
