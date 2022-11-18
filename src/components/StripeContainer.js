import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51M2vb6KZBspn6WKKUZ0VvDFGfO6Y2wa8tKR1W4CrSCV5U6WUBcgjFi1f2VvAxVsBYkoEnFJFEvQVdjgQJ0OwUDQq00g0qqqKN2";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm totalPrice={props.totalPrice} />
    </Elements>
  );
}
