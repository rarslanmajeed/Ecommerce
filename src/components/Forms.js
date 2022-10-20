import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const Forms = () => {
  const row1 = ["First name", "Last name", "Phone Number"];
  const row2 = ["City", "State", "Zip"];

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
              <Form.Control.Feedback type="invalid">
                Please provide a valid {label}
              </Form.Control.Feedback>
            </Form.Group>
          );
        })}
      </Row>

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
