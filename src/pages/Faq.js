import React from "react";
import { Container } from "react-bootstrap";
const Faq = () => {
  return (
    <Container className="mt-3">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <h4 className="mt-4">HOW CAN I PLACE AN ORDER?</h4>
      <p>In order to place an order with E-Store, you will be required to:</p>
      <u1>
        <li> Shop for the items you want</li>
        <li> Add the items to your Shopping Cart</li>
        <li> Proceed to checkout</li>
        <li>
          Enter billing and shipping information( make sure the billing address
          is same as the shipping address)
        </li>
        <li> Review and submit your order</li>
      </u1>
      <h4 className="mt-2">
        HOW WILL I KNOW IF Excess Exports HAS RECEIVED MY ORDER?
      </h4>
      <p>
        After you place your order, you will receive an email from
        LeftoverHub.com. An order is shipped when billing and delivery address
        is verified, You may receive a phone call or a text from our team to
        confirm your order. In case you don't receive any verification mail or
        phone call you may contact us
      </p>
      <h4 className="mt-2">AM I ABLE TO TRACK MY ORDER?</h4>
      <p>
        Yes, when we dispatch your order for delivery a tracking code is
        generated you can ask for it via mail or WhatsaApp.
      </p>
      <h4 className="mt-2">CAN I AMEND MY ORDER?</h4>
      <p>
        Unfortunately, we are unable to amend an order once it has been
        processed/Shipped. This includes changing the size/color of an item,
        removing an item, changing the payment methods or delivery mode.
      </p>
      <h4 className="mt-2">CAN I ADD ITEMS TO AN EXISTING ORDER?</h4>
      <p>
        All order received at www.excessexports.com are processed/shipped within
        12 working hours. In-case the order has been shipped, it is not possible
        to combine orders or add items to an existing order.
      </p>
    </Container>
  );
};

export default Faq;
