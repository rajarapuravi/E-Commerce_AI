import Layout from "../components/layout/Layout";
import "./Wishlist.css";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  removeWishlist
} from "../redux/wishlistSlice";

import {
  addToCart
} from "../redux/cartSlice";

function Wishlist() {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeWishlist(item.id));
  };

  return (
    <Layout>

      <div className="wishlist-page">

        <h1 className="wishlist-title">
          My Wishlist ❤️
        </h1>

        {wishlistItems.length === 0 ? (

          <div className="empty-wishlist">
            <h2>Your Wishlist is Empty</h2>
            <p>
              Add products to your wishlist.
            </p>
          </div>

        ) : (

          <div className="wishlist-grid">

            {wishlistItems.map((item) => (

              <div
                key={item.id}
                className="wishlist-card"
              >

                <img
                  src={item.image}
                  alt={
                    item.name ||
                    item.title ||
                    "Product"
                  }
                  className="wishlist-image"
                />

                <div className="wishlist-content">

                  <h3>
                    {item.name ||
                      item.title ||
                      "Product"}
                  </h3>

                  <p className="wishlist-price">
                    ₹{item.price}
                  </p>

                  <div className="wishlist-buttons">

                    <button
                      className="add-cart-btn"
                      onClick={() =>
                        handleMoveToCart(item)
                      }
                    >
                      Move To Cart
                    </button>

                    <button
                      className="remove-wishlist-btn"
                      onClick={() =>
                        dispatch(
                          removeWishlist(item.id)
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </Layout>
  );
}

export default Wishlist;