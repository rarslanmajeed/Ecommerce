import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../redux/actions/action";
import Container from "react-bootstrap/Container";
import ProductDetail from "../components/ProductDetail";
import QuantityButton from "../components/QuantityButton";

const CardsDetails = () => {
  const [data, setData] = useState([]); // initialize data to null
  const { id } = useParams(); // gets the id of the item
  const cartItems = useSelector((state) => state.cartreducer.carts); // store the items in Cart
  const navigate = useNavigate(); // it navigates from current page to the page listed
  const dispatch = useDispatch();

  const compare = () => {
    // check whether the fetch id is present in cart
    let compareData = cartItems.filter((item) => {
      return item.id === id;
    });
    setData(compareData);
  };

  const deleteCart = (id) => {
    // this function remove the items from cart
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
