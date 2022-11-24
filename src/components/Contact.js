import React, { useState } from "react";

const Contact = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    order: props.cartItems,
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, phone, email, address, message, order } = userData;
    setUserData({ ...userData, order: props.cartItems });
    if (name && phone && email && address && message) {
      const res = fetch(
        "https://ecommerce-c0e92-default-rtdb.firebaseio.com/customerData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            address,
            message,
            order,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
          order: "",
        });
        alert("Order Placed Successfully");
        window.location.reload(false);
      } else {
        alert("Please Complete the Order");
      }
    } else {
      alert("Please Complete the Order");
    }
  };

  return (
    <div style={{ minHeight: "48.9vh" }}>
      <form method="POST">
        <div className="row" style={{ margin: 10 }}>
          <div className="col-lg-6">
            <input
              type="text"
              name="name"
              id=""
              className="form-control"
              placeholder="Full Name"
              value={userData.name}
              onChange={postUserData}
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              name="phone"
              id=""
              className="form-control"
              placeholder="Phone Number "
              value={userData.phone}
              onChange={postUserData}
            />
          </div>
        </div>

        <div className="row" style={{ margin: 10 }}>
          <div className="col-12">
            <input
              type="text"
              name="email"
              id=""
              className="form-control"
              placeholder="Email ID"
              value={userData.email}
              onChange={postUserData}
            />
          </div>
        </div>

        <div className="row" style={{ margin: 10 }}>
          <div className="col-12">
            <input
              type="text"
              name="address"
              id=""
              className="form-control"
              placeholder="Add Address"
              value={userData.address}
              onChange={postUserData}
            />
          </div>
        </div>

        <div className="row" style={{ margin: 10 }}>
          <div className="col-12">
            <input
              type="text"
              name="message"
              id=""
              className="form-control"
              placeholder="Delivery Instructions"
              value={userData.message}
              onChange={postUserData}
            />
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label">
            Agree with Terms & Conditions
          </label>
        </div>

        <button
          type="submit"
          className="btn bg-dark w-25"
          style={{
            color: "white",
            margin: 10,
          }}
          onClick={submitData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
