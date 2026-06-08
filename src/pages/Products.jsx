import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

import products from "../assets/data/products";
import "./Products.css";

function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

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

          <button
            onClick={() =>
              setCategory("All")
            }
          >
            All
          </button>

          <button
            onClick={() =>
              setCategory("Mobiles")
            }
          >
            Mobiles
          </button>

          <button
            onClick={() =>
              setCategory("Laptops")
            }
          >
            Laptops
          </button>

          <button
            onClick={() =>
              setCategory("Accessories")
            }
          >
            Accessories
          </button>

          <button
            onClick={() =>
              setCategory("Smart Watches")
            }
          >
            Smart Watches
          </button>

        </div>

        <div className="product-grid">

          {products

            .filter(product =>
              category === "All"
                ? true
                : product.category === category
            )

            .filter(product =>
              product.name
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            )

            .map((product) => (

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

            ))}

        </div>

      </div>

    </Layout>
  );
}

export default Products;