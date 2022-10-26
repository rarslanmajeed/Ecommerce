import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Forms from "../components/Forms";
import Form from "react-bootstrap/Form";
import OrderSummary from "../components/OrderSummary";

const Order = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts);

  const totalPrice = cartItems.reduce(
    (accumulator, object) => accumulator + object.price * object.qnty,
    0
  );

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Container>
      <h2 className="text-center mt-4">Delivery Instructions</h2>
      <hr />
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="mt-5"
      >
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
              {cartItems.map((element) => {
                return <OrderSummary element={element} />;
              })}
            </tbody>
          </Table>
        </div>
        <hr />
        <h5 className="mt-2">
          <strong>Total: </strong>$ {totalPrice}
        </h5>
        <hr />
        <Button type="submit" onClick={handleSubmit}>
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default Order;
