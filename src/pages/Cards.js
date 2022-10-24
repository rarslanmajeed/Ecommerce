import React, { useState } from "react";
import products from "../data/Products";
import "../components/style.css";
import Items from "../components/Items";
import PriceRange from "../components/PriceRange";
import Categories from "../components/Categories";
const Cards = () => {
  const [filter, setFilter] = useState(products);
  const filterProduct = (category) => {
    const updatedlist = products.filter(
      (element) => element.category === category
    );
    setFilter(updatedlist);
  };
  const filterPrice = (price) => {
    const updatedlist = products.filter((element) => element.price <= price);
    setFilter(updatedlist);
  };

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Latest products</h2>
        <hr />
        <div className="row d-flex justify-content-center align-items-center">
          <div className="buttons justify-content-center">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setFilter(products)}
              style={{ margin: "5px" }}
            >
              All
            </button>
            <Categories filterProduct={filterProduct} />
            <PriceRange filterPrice={filterPrice} />
          </div>
          <Items searchProduct={filter} />
        </div>
      </div>
    </>
  );
};

export default Cards;
