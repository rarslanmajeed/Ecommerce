import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove, addItem, delItem } from "../redux/actions/action";
import Container from "react-bootstrap/Container";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const compare = () => {
    let compareData = cartItems.filter((item) => {
      return item.id === id;
    });
    setData(compareData);
  };

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const deleteCart = (id) => {
    dispatch(remove(id));
    navigate("/home");
  };

  const removeCart = (item) => {
    dispatch(delItem(item));
  };

  useEffect(() => {
    compare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container>
      {data.map((element) => {
        return (
          <>
            <h2 className="text-center">{element.rname}</h2>
            <hr />
            <img
              src={element.imgdata}
              alt=""
              style={{
                width: "30vw",
              }}
            />
            <Table>
              <tr>
                <td>
                  <p>
                    <strong>Price</strong> : $ {element.price}
                  </p>
                  <p>
                    <strong>Brand</strong> : {element.brand}
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
                      {element.rating} ★
                    </span>
                  </p>
                  <p>
                    <strong>Category : </strong>
                    <span>{element.category}</span>
                  </p>
                  <p>
                    <strong>Description</strong> : {element.description}
                  </p>
                  <p>
                    <strong>Total</strong> : $ {element.price * element.qnty}
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
                        onClick={() => deleteCart(element.id)}
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
                        element.qnty <= 1
                          ? () => deleteCart(element.id)
                          : () => removeCart(element)
                      }
                    >
                      -
                    </span>
                    <span style={{ fontSize: 22 }}>{element.qnty}</span>
                    <span
                      style={{ fontSize: 24 }}
                      onClick={() => addToCart(element)}
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
