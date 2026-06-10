import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

function Checkout() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [showSuccess, setShowSuccess] =
    useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!user) {
      alert("Please Login First");
      return;
    }

    const newOrder = {
      id: Date.now(),

      product: cartItems
        .map(
          (item) =>
            item.name ||
            item.title ||
            "Product"
        )
        .join(", "),

      price: totalPrice,

      status: "Processing",

      paymentMethod,

      customerName: formData.name,

      customerEmail: formData.email,

      customerPhone: formData.phone,

      customerAddress: formData.address,

      orderDate:
        new Date().toLocaleString(),
    };

    const orderKey =
      `orders_${user.email}`;

    const existingOrders =
      JSON.parse(
        localStorage.getItem(orderKey)
      ) || [];

    existingOrders.push(newOrder);

    localStorage.setItem(
      orderKey,
      JSON.stringify(existingOrders)
    );

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

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="summary-item"
            >

              <span>
                {(item.name ||
                  item.title) +
                  " x" +
                  item.quantity}
              </span>

              <span>
                ₹
                {item.price *
                  item.quantity}
              </span>

            </div>

          ))}

          <hr />

          <h3>
            Total: ₹{totalPrice}
          </h3>

          <h2>Payment Method</h2>

          <div className="payment-options">

            <label>
              <input
                type="radio"
                name="payment"
                value="Google Pay"
                onChange={(e) =>
                  setPaymentMethod(
                    e.target.value
                  )
                }
              />
              Google Pay
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="PhonePe"
                onChange={(e) =>
                  setPaymentMethod(
                    e.target.value
                  )
                }
              />
              PhonePe
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Paytm"
                onChange={(e) =>
                  setPaymentMethod(
                    e.target.value
                  )
                }
              />
              Paytm
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="UPI"
                onChange={(e) =>
                  setPaymentMethod(
                    e.target.value
                  )
                }
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Cash On Delivery"
                onChange={(e) =>
                  setPaymentMethod(
                    e.target.value
                  )
                }
              />
              Cash On Delivery
            </label>

          </div>

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
            Payment Method:
            {" "}
            {paymentMethod}
          </p>

          <p>
            Thank you for shopping
            with RCBK.
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