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
    let compareData = cartItems.filter((e) => {
      return e.id === id;
    });
    setData(compareData);
  };

  const addToCart = (e) => {
    dispatch(addItem(e));
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
      {data.map((ele) => {
        return (
          <>
            <h2 className="text-center">{ele.rname}</h2>
            <hr />
            <img
              src={ele.imgdata}
              alt=""
              style={{
                width: "30vw",
              }}
            />
            <Table>
              <tr>
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
                        onClick={() => deleteCart(ele.id)}
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
                        ele.qnty <= 1
                          ? () => deleteCart(ele.id)
                          : () => removeCart(ele)
                      }
                    >
                      -
                    </span>
                    <span style={{ fontSize: 22 }}>{ele.qnty}</span>
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
