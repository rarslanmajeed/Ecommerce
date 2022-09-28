import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
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
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required type="text" placeholder="+92300-0000000" />
          </Form.Group>
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
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
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
        <h2 className="text-center mt-2">Order Summary</h2>
        <hr />
        <div
          className="d-flex mx-2 mt-4 card-deatils"
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
        <Button type="submit">Place Order</Button>
      </Form>
    </Container>
  );
};

export default Order;
