import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2 className="cart-title">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your Cart is Empty 🛒</h3>
          <p>Add some products to continue shopping.</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p className="price">
                  ₹{item.price}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity(item.id)
                      )
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity(item.id)
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <p className="subtotal">
                  Subtotal: ₹
                  {item.price * item.quantity}
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>
              Total Amount: ₹{totalPrice}
            </h3>

          <Link to="/checkout">
  <button className="checkout-btn">
    Proceed to Checkout
  </button>
</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;