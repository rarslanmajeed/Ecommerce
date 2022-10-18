import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import products from "../data/Products";
import "../components/style.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/action";
import { faker } from "@faker-js/faker";

const Cards = () => {
  const [query, setQuery] = useState("");
  const data = products.filter((e) => e.rname.toLowerCase().includes(query));
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addItem(e));
  };
  return (
    <>
      <div className="container mt-3">
        <img
          className="mt-4"
          src={faker.image.business(1140, 450)}
          alt=""
          style={{
            width: "80vw",
            padding: "0 0 0 60px",
          }}
        />
        <h2 className="text-center mt-3">Latest Products</h2>
        <div className="row d-flex justify-content-center align-items-center">
          <Form
            style={{
              width: "1000px",
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="search"
                placeholder="Enter Products..."
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
          </Form>
          {data.map((item, id) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                  key={item.id}
                >
                  <Card.Img
                    variant="top"
                    src={item.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>
                      {item.rname}{" "}
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        {item.rating} ★
                      </span>
                    </Card.Title>
                    <Card.Text>
                      <p>Price : $ {item.price}</p>
                      <p>Brand: {item.brand}</p>
                    </Card.Text>

                    <div className="button_div d-flex justify-content-center">
                      {item.maxQuantity >= 1 ? (
                        <Button
                          variant="primary"
                          onClick={() => send(item)}
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
