import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import products from "../assets/data/products";

import { addToCart } from "../redux/cartSlice";
import { addWishlist } from "../redux/wishlistSlice";
import "./ProductDetails.css";
import ProductReviews from "../components/products/ProductReviews";
import RelatedProducts from "../components/products/RelatedProducts";
function ProductDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
  <Layout>
    <ProductReviews />
    <RelatedProducts />

    <div className="product-details-container">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-info">

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <h3>Description</h3>

        <p>{product.description}</p>

        <p>
          <strong>Category:</strong>
          {" "}{product.category}
        </p>

        <p>
          <strong>Rating:</strong>
          ⭐ {product.rating}
        </p>

        <p>
          <strong>Stock:</strong>
          {" "}{product.stock}
        </p>

        <div className="btn-group">

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add To Cart
          </button>

          <button
            className="wishlist-btn"
            onClick={() =>
              dispatch(addWishlist(product))
            }
          >
            Add To Wishlist
          </button>

        </div>

      </div>

    </div>

  </Layout>
);
}

export default ProductDetails;