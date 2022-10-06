import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RMV, ADD, DLT, INC } from "../redux/actions/action";
import Container from "react-bootstrap/Container";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id === id;
    });
    setData(compareData);
  };

  const addToCart = (e) => {
    dispatch(ADD(e));
  };

  const customAdd = (e, v) => {
    if (v < 0) v = 1;
    else if (v > e.maxQuantity) {
      v = e.maxQuantity;
    }
    dispatch(INC(e, v));
  };

  const dlt = (id) => {
    dispatch(RMV(id));
    navigate("/");
  };

  const remove = (item) => {
    dispatch(DLT(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <Container>
      {data.map((ele) => {
        return (
          <>
            <h2 className="text-center">{ele.rname}</h2>
            <hr />
            <Table>
              <tr>
                <td>
                  <img
                    src={ele.imgdata}
                    alt=""
                    style={{ padding: "2rem", height: "350px" }}
                  />
                </td>
                <td>
                  <p>
                    <strong>Price</strong> : $ {ele.price}
                  </p>
                  <p>
                    <strong>Brand</strong> : {ele.brand}
                  </p>
                  <p>
                    <strong>Rating : </strong>
                    <span
                      style={{
                        background: "green",
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}
                    >
                      {ele.rating} ★
                    </span>
                  </p>
                  <p>
                    <strong>Category : </strong>
                    <span>{ele.category}</span>
                  </p>
                  <p>
                    <strong>Description</strong> : {ele.description}
                  </p>
                  <p>
                    <strong>Total</strong> : $ {ele.price * ele.qnty}
                  </p>
                  <p>
                    <strong>Remove : </strong>
                    <span>
                      <i
                        className="fas fa-trash"
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                        onClick={() => dlt(ele.id)}
                      ></i>
                    </span>
                  </p>
                  <strong>Quantity : </strong>
                  <div
                    className="mt-3 d-flex justify-content-between align-items-center"
                    style={{
                      width: 150,
                      cursor: "pointer",

                      color: "#111",
                    }}
                  >
                    <span
                      style={{ fontSize: 24 }}
                      onClick={
                        ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)
                      }
                    >
                      -
                    </span>
                    <span style={{ fontSize: 22 }}>
                      <Form
                        style={{
                          width: "70px",
                          alignItems: "center",
                        }}
                        className="mt-2"
                      >
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="type"
                            onChange={(e) => customAdd(ele, e.target.value)}
                            value={ele.qnty}
                          />
                        </Form.Group>
                      </Form>
                    </span>
                    <span
                      style={{ fontSize: 24 }}
                      onClick={() => addToCart(ele)}
                    >
                      +
                    </span>
                  </div>
                </td>
              </tr>
            </Table>
          </>
        );
      })}
    </Container>
  );
};

export default CardsDetails;
