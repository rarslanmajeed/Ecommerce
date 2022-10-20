import React, { useState } from "react";
import products from "../data/Products";
import "../components/style.css";
import Dropdown from "react-bootstrap/Dropdown";
import productsList from "../data/ProductsList";
import Items from "../components/Items";

const Cards = () => {
  const [filter, setFilter] = useState(products);
  const filterProduct = (cat) => {
    const updatedlist = products.filter((el) => el.category === cat);
    setFilter(updatedlist);
  };
  const filterPrice = (p) => {
    const updatedlist = products.filter((el) => el.price <= p);
    setFilter(updatedlist);
  };

  const priceArray = [
    { value: 10 },
    { value: 100 },
    { value: 1000 },
    { value: 10000 },
    { value: 100000 },
  ];

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
            {productsList.map((cat, id) => {
              return (
                <button
                  className="btn btn-outline-dark me-2"
                  style={{ margin: "5px" }}
                  key={cat.id}
                  onClick={() => filterProduct(cat.name)}
                >
                  {cat.name}
                </button>
              );
            })}
            <Dropdown className="btn  me-2">
              <Dropdown.Toggle variant="bg-black" id="dropdown-basic">
                Price Range
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {priceArray.map((range) => {
                  return (
                    <Dropdown.Item onClick={() => filterPrice(range.value)}>
                      under {range.value} $
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Items searchProduct={filter} />
        </div>
      </div>
    </>
  );
};

export default Cards;
