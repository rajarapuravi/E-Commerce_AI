import React from "react";
import "./Categories.css";

function Categories() {

  const categories = [
    "Mobiles",
    "Electronics",
    "Beauty",
    "Accessories",
    "Fashion",
    "Gaming",
    "Smart Watches",
    "Home Appliances"
  ];

  return (
    <div className="categories">

      <h2>Categories</h2>

      <div className="category-grid">
        {
          categories.map((item,index)=>(
            <div
              key={index}
              className="category-card"
            >
              {item}
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default Categories;