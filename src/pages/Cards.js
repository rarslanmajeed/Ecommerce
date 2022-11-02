// This page if of Product
import React, { useState } from "react";
import products from "../data/productsData"; // file where the data of products is stored
import "../components/style.css";
import Items from "../components/Items";
import PriceRange from "../components/PriceRange";
import Categories from "../components/Categories";
const Cards = () => {
  const [filter, setFilter] = useState(products); // initialize filter with all the products
  const filterProduct = (category) => {
    // function which filter product according to the category
    const updatedlist = products.filter(
      (element) => element.category === category
    );
    setFilter(updatedlist);
  };
  const filterPrice = (price) => {
    // function which filter products according to the price
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
            <button // button which shows all the products
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
