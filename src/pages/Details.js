import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import StripeContainer from "../components/StripeContainer";
import Contact from "../components/Contact";

const Details = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the items present in cart
  const totalPrice = cartItems.reduce(
    (accumulator, object) => accumulator + object.price * object.qnty,
    0
  ); // calculate the total price of the items present in cart.

  return (
    <Container>
      <h2 className="text-center mt-4">Delivery Instructions</h2>
      <StripeContainer totalPrice={totalPrice} />
      <hr />
      <Contact cartItems={cartItems} />
    </Container>
  );
};

export default Details;
