import React from "react";
import "./RelatedProducts.css";

const relatedProducts = [
  {
    id: 1,
    name: "Gaming Mouse",
    price: 999,
    image:
      "https://via.placeholder.com/250x200?text=Mouse"
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    price: 1999,
    image:
      "https://via.placeholder.com/250x200?text=Keyboard"
  },
  {
    id: 3,
    name: "Headphones",
    price: 1499,
    image:
      "https://via.placeholder.com/250x200?text=Headphones"
  },
  {
    id: 4,
    name: "Webcam",
    price: 1299,
    image:
      "https://via.placeholder.com/250x200?text=Webcam"
  }
];

function RelatedProducts() {
  return (
    <div className="related-products">

      <h2>
        Customers Also Bought
      </h2>

      <div className="related-grid">

        {relatedProducts.map(
          product => (

            <div
              key={product.id}
              className="related-card"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h4>
                {product.name}
              </h4>

              <p>
                ₹{product.price}
              </p>

              <button>
                View Product
              </button>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default RelatedProducts;