import React, { useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import products from "../data/Products";
import "../components/style.css";
import Items from "../components/Items";

const Cards = () => {
  const [search, setSearch] = useState("");

  const searchProduct = useMemo(() => {
    return products.filter((product) => {
      return (
        product.rname.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  return (
    <>
      <div className="container mt-3">
        <img
          className="mt-4"
          src="/images/ad.png"
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
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Items searchProduct={searchProduct} />
        </div>
      </div>
    </>
  );
};

export default Cards;
