import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

function Checkout() {
  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const [showSuccess, setShowSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: ""
    });

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  const placeOrder = () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is Empty");
      return;
    }

    setShowSuccess(true);
  };

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="shipping-section">

          <h2>Shipping Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

        </div>

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cartItems.map(item => (
            <div
              key={item.id}
              className="summary-item"
            >
              <span>
                {item.name} x{item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr />

          <h3>
            Total: ₹{totalPrice}
          </h3>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>

        </div>

      </div>

      {showSuccess && (
        <div className="success-popup">
          <h2>
            🎉 Order Placed Successfully!
          </h2>

          <p>
            Thank you for shopping with RCBK.
          </p>

          <button
            onClick={() =>
              setShowSuccess(false)
            }
          >
            OK
          </button>
        </div>
      )}

    </div>
  );
}

export default Checkout;