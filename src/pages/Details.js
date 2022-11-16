import React, { useState } from "react";
import { useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Forms from "../components/Forms";
import Form from "react-bootstrap/Form";
import CheckoutForm from "../components/CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51M2vb6KZBspn6WKKUZ0VvDFGfO6Y2wa8tKR1W4CrSCV5U6WUBcgjFi1f2VvAxVsBYkoEnFJFEvQVdjgQJ0OwUDQq00g0qqqKN2"
);

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

  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51M2vb6KZBspn6WKKcGIuy3TJ37EzMQNK0y3HTQ9HIfF9H0muwCu5S0jsJAqDWzAvgBMgwxFcSt4bx0z5nJfC4CP500la8ESykq",
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
        <Forms totalPrice={totalPrice} />
        <h5 className="mt-2">
          <strong>Total: </strong>$ {totalPrice}
        </h5>
        <hr />

        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </Form>
    </Container>
  );
};

export default Details;
// <Button type="submit">Place Order</Button>
