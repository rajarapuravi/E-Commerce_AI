import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

import products from "../assets/data/products";
import "./Products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products
    .filter((product) =>
      category === "All"
        ? true
        : product.category === category
    )
    .filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <Layout>
      <div className="container">
        <h1>All Products</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="category-filter">
          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Mobiles")}>
            Mobiles
          </button>

          <button onClick={() => setCategory("Electronics")}>
            Electronics
          </button>

          <button onClick={() => setCategory("Beauty")}>
            Beauty
          </button>

          <button onClick={() => setCategory("Fashion")}>
            Fashion
          </button>

          <button onClick={() => setCategory("Accessories")}>
            Accessories
          </button>

          <button onClick={() => setCategory("Gaming")}>
            Gaming
          </button>

          <button onClick={() => setCategory("Smart Watches")}>
            Smart Watches
          </button>

          <button onClick={() => setCategory("Home Appliances")}>
            Home Appliances
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p>₹{product.price}</p>

                <p className="product-category">
                  {product.category}
                </p>

                <Link
                  to={`/product/${product.id}`}
                >
                  <button>
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Products;