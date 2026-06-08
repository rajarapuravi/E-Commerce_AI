import React, { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {

  const [products, setProducts] =
    useState([]);

  const [product, setProduct] =
    useState({
      name: "",
      price: "",
      image: ""
    });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.value
    });
  };

  const addProduct = () => {

    if (
      !product.name ||
      !product.price ||
      !product.image
    ) {
      alert("Fill all fields");
      return;
    }

    setProducts([
      ...products,
      {
        id: Date.now(),
        ...product
      }
    ]);

    setProduct({
      name: "",
      price: "",
      image: ""
    });
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter(
        item => item.id !== id
      )
    );
  };

  return (
    <div className="admin-page">

      <h1>
        Admin Dashboard
      </h1>

      <div className="admin-form">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <button
          onClick={addProduct}
        >
          Add Product
        </button>

      </div>

      <div className="product-list">

        {products.map(item => (

          <div
            key={item.id}
            className="admin-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>
              {item.name}
            </h3>

            <p>
              ₹{item.price}
            </p>

            <button
              onClick={() =>
                deleteProduct(
                  item.id
                )
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminDashboard;