import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Forms from "../components/Forms";
const Order = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  const [price, setPrice] = useState(0);
  const total = () => {
    let price = 0;
    getData.map((ele) => {
      price += ele.price * ele.qnty;
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <Container>
      <Forms />
      <h2 className="text-center mt-2">Order Summary</h2>
      <hr />
      <div
        className="d-flex mx-2 mt-4"
        style={{ width: "24 rem", padding: 10 }}
      >
        <Table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((e) => {
              return (
                <>
                  <tr>
                    <td>
                      <img
                        src={e.imgdata}
                        style={{ width: "5rem", height: "3rem" }}
                        alt=""
                      />
                    </td>
                    <td>{e.rname}</td>
                    <td>Price : $ {e.price}</td>
                    <td>Quantity : {e.qnty}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
      <hr />
      <h5 className="mt-2">
        <strong>Total: </strong>$ {price}
      </h5>
      <hr />
      <Button type="submit" href="/">
        Place Order
      </Button>
    </Container>
  );
};

export default Order;
