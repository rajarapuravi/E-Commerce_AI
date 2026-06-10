import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import "./Navbar.css";

function Navbar() {

  const cartItems =
    useSelector(
      state => state.cart.cartItems
    );

  const wishlistItems =
    useSelector(
      state =>
      state.wishlist.wishlistItems
    );
    const user =
  JSON.parse(
    localStorage.getItem("currentUser")
  );

{
  user ? (
    <span>
      Welcome, {user.name}
    </span>
  ) : (
    <Link to="/login">
      Login
    </Link>
  );
}

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          RCBK
        </Link>
      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search Products..."
        />

        <button>
          Search
        </button>

      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>
        <Link to="/admin">
  Admin
</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/ai-assistant">
          AI
        </Link>

        <Link to="/wishlist">
          Wishlist
          <span className="badge">
            {wishlistItems.length}
          </span>
        </Link>

        <Link to="/cart">
          Cart
          <span className="badge">
            {cartItems.length}
          </span>
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/profile">
          Profile
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;