// This Component is used to get information relation to Order like Name, Address
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import StripeCheckout from "react-stripe-checkout";

const Forms = (props) => {
  const row1 = ["First name", "Last name", "Phone Number"];
  const row2 = ["City", "State", "Zip"];
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <>
      <Row className="mb-3">
        {row1.map((label) => {
          return (
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>{label}</Form.Label>
              <Form.Control required type="text" placeholder={label} />
            </Form.Group>
          );
        })}
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {row2.map((label) => {
          return (
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>{label}</Form.Label>
              <Form.Control required type="text" placeholder={label} />
            </Form.Group>
          );
        })}
      </Row>
      <label style={{ padding: "10 0" }}>
        <strong>Payment Method</strong>
      </label>
      <div key="radio" className="mb-3">
        <Form.Check
          label="Cash on Delivery"
          name="group1"
          type="radio"
          id="Cash"
          required
        />
        <Form.Check
          label={
            <StripeCheckout
              token={onToken}
              name="Payment"
              amount={props.totalPrice * 100}
              stripeKey="pk_test_51M2vb6KZBspn6WKKUZ0VvDFGfO6Y2wa8tKR1W4CrSCV5U6WUBcgjFi1f2VvAxVsBYkoEnFJFEvQVdjgQJ0OwUDQq00g0qqqKN2"
            />
          }
          name="group1"
          type="radio"
          id="Card"
        />
      </div>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Delivery Instructions</Form.Label>
        <Form.Control as="textarea" rows={3} validated />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <hr />
    </>
  );
};

export default Forms;
