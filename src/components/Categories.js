import React from "react";
import productsList from "../data/ProductsList";

const Categories = (props) => {
  return (
    <>
      {productsList.map((cat, id) => {
        return (
          <button
            className="btn btn-outline-dark me-2"
            style={{ margin: "5px" }}
            key={cat.id}
            onClick={() => props.filterProduct(cat.name)}
          >
            {cat.name}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
