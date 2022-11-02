import React from "react";
import productsList from "../data/ProductsList"; // List of Categoriess

const Categories = (props) => {
  return (
    <>
      {productsList.map((category) => {
        // This map function displays the Category Button on Product Page
        return (
          <button
            className="btn btn-outline-dark me-2"
            style={{ margin: "5px" }}
            key={category.id}
            onClick={() => props.filterProduct(category.name)} // it filters the items of that category
          >
            {category.name}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
