import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../redux/actions/action";
import Container from "react-bootstrap/Container";
import ProductDetail from "../components/ProductDetail";
import QuantityButton from "../components/QuantityButton";

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

  const deleteCart = (id) => {
    dispatch(remove(id));
    navigate("/home");
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

            <tr>
              <td>
                <ProductDetail element={element} deleteCart={deleteCart} />
                <QuantityButton element={element} deleteCart={deleteCart} />
              </td>
            </tr>
          </>
        );
      })}
    </Container>
  );
};

export default CardsDetails;
