import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "../data/Products";
import "../components/style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import Dropdown from "react-bootstrap/Dropdown";
import productsList from "../data/ProductsList";

const Cards = () => {
  const [filter, setFilter] = useState(products);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };
  const filterProduct = (cat) => {
    const updatedlist = products.filter((el) => el.category === cat);
    setFilter(updatedlist);
  };
  const filterPrice = (p) => {
    const updatedlist = products.filter((el) => el.price <= p);
    setFilter(updatedlist);
  };

  const priceArray = [
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
          {filter.map((element, id) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                  key={element.id}
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>
                      {element.rname}{" "}
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        {element.rating} ★
                      </span>
                    </Card.Title>
                    <Card.Text>
                      <p>Price : $ {element.price}</p>
                      <p>Brand: {element.brand}</p>
                    </Card.Text>

                    <div className="button_div d-flex justify-content-center">
                      {element.maxQuantity >= 1 ? (
                        <Button
                          variant="primary"
                          onClick={() => send(element)}
                          className="col-lg-12"
                        >
                          Add to Cart
                        </Button>
                      ) : (
                        <h3>Out of Stock</h3>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
