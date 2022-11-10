import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Forms from "../components/Forms";
import Form from "react-bootstrap/Form";
import OrderSummary from "../components/OrderSummary";

const Order = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the items present in cart

  const totalPrice = cartItems.reduce(
    (accumulator, object) => accumulator + object.price * object.qnty,
    0
  ); // calculate the total price of the items present in cart.

  const title = ["Photo", "Product", "Price", "Quantity"];

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    // function which checks that all required forms are filled correctly when sub,it is pressed.
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
                {title.map((heading) => {
                  return <th>{heading}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {cartItems.map((element) => {
                // shows the items in cart
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
        <Button href="/home" type="submit" onClick={handleSubmit}>
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default Order;
