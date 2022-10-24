import React from "react";
import productsList from "../data/ProductsList";

const Categories = (props) => {
  return (
    <>
      {productsList.map((category) => {
        return (
          <button
            className="btn btn-outline-dark me-2"
            style={{ margin: "5px" }}
            key={category.id}
            onClick={() => props.filterProduct(category.name)}
          >
            {category.name}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
