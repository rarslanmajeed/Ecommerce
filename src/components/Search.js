import React from "react";
import Form from "react-bootstrap/Form";

const Search = (props) => {
  return (
    <Form
      style={{
        width: "1000px",
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="search"
          placeholder="Enter Products..."
          onChange={(e) => props.setValue(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
