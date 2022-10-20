import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Items = (props) => {
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addItem(e));
  };
  return (
    <>
      {props.searchProduct.map((item) => {
        return (
          <>
            <Card
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
              key={item.id}
            >
              <Card.Img
                variant="top"
                src={item.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>
                  {item.rname}{" "}
                  <span
                    style={{
                      background: "green",
                      color: "#fff",
                      padding: "2px 5px",
                      borderRadius: "5px",
                    }}
                  >
                    {item.rating} ★
                  </span>
                </Card.Title>
                <Card.Text>
                  <p>Price : $ {item.price}</p>
                  <p>Brand: {item.brand}</p>
                </Card.Text>

                <div className="button_div d-flex justify-content-center">
                  {item.maxQuantity >= 1 ? (
                    <Button
                      variant="primary"
                      onClick={() => send(item)}
                      className="col-lg-12"
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <h3>Out of Stock</h3>
                  )}
                </div>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Items;
