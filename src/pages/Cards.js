import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Products from "../data/Products";
import "../components/style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import Dropdown from "react-bootstrap/Dropdown";

const Cards = () => {
  const [filter, setFilter] = useState(Products);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };
  const filterProduct = (cat) => {
    const updatedlist = Products.filter((el) => el.category === cat);
    setFilter(updatedlist);
  };
  const filterPrice = (p) => {
    const updatedlist = Products.filter((el) => el.price <= p);
    setFilter(updatedlist);
  };
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Latest Products</h2>
        <hr />
        <div className="row d-flex justify-content-center align-items-center">
          <div className="buttons d-flex justify-content-center">
            <Dropdown className="me-2">
              <Dropdown.Toggle variant="bg-black" id="dropdown-basic">
                Price Range
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => filterPrice(100)}>
                  under 100 $
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterPrice(1000)}>
                  under 1000 $
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterPrice(10000)}>
                  under 10000 $
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterPrice(100000)}>
                  under 100000 $
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setFilter(Products)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Electronics")}
            >
              Electronics
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Stationary")}
            >
              Stationary
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Automotives")}
            >
              Automotives
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Toys")}
            >
              Toys
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Sports")}
            >
              Sports
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Health")}
            >
              Health and Beauty
            </button>
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
                      {element.quantity >= 1 ? (
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
