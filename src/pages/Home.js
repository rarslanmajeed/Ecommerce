import React, { useMemo, useState } from "react";
import products from "../data/productsData";
import "../components/style.css";
import Items from "../components/Items";
import Search from "../components/Search";

const Cards = () => {
  const [search, setSearch] = useState(""); // initialize search to null

  const searchProduct = useMemo(() => {
    // useMemo hook to run only if the search is changes and search the result matched.
    return products.filter((product) => {
      return (
        product.rname.toLowerCase().includes(search.toLowerCase()) || // search using name or category
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
