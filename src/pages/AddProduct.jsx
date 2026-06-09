import React, { useState } from "react";
import Layout from "../components/layout/Layout";

function AddProduct() {

  const [product, setProduct] =
    useState({
      name: "",
      price: "",
      category: "",
      description: ""
    });

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]:
      e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Product Added Successfully"
    );

    console.log(product);
  };

  return (
    <Layout>

      <div className="container">

        <h1>Add Product</h1>

        <form
          onSubmit={handleSubmit}
          className="product-form"
        >

          <input
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <button type="submit">
            Add Product
          </button>

        </form>

      </div>

    </Layout>
  );
}

export default AddProduct;