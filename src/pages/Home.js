import React, { useMemo, useState } from "react";
import products from "../data/Products";
import "../components/style.css";
import Items from "../components/Items";
import Search from "../components/Search";

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
          <Search setValue={setSearch} />
          <Items searchProduct={searchProduct} />
        </div>
      </div>
    </>
  );
};

export default Cards;
