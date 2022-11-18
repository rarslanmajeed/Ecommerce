import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Forms from "../components/Forms";
import Form from "react-bootstrap/Form";
import StripeContainer from "../components/StripeContainer";

const Details = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the items present in cart
  const totalPrice = cartItems.reduce(
    (accumulator, object) => accumulator + object.price * object.qnty,
    0
  ); // calculate the total price of the items present in cart.
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    // function which checks that all required forms are filled correctly when submit is pressed.
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
      <StripeContainer totalPrice={totalPrice} />
      <hr />
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="mt-5"
      >
        <Forms totalPrice={totalPrice} />
        <h5 className="mt-2">
          <strong>Total: </strong>$ {totalPrice}
        </h5>
        <hr />

        <Button type="submit">Place Order</Button>
      </Form>
    </Container>
  );
};

export default Details;
