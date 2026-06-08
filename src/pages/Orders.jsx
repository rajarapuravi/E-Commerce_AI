import Layout from "../components/layout/Layout";
import "./Orders.css";

function Orders() {

  const orders = [
    {
      id: 1001,
      product: "Samsung Galaxy M35",
      price: 18999,
      status: "Delivered"
    },

    {
      id: 1002,
      product: "Lenovo LOQ",
      price: 69999,
      status: "Shipped"
    },

    {
      id: 1003,
      product: "Boat Smart Watch",
      price: 2999,
      status: "Processing"
    }
  ];

  return (
    <Layout>

      <div className="orders-container">

        <h1>My Orders</h1>

        {
          orders.map(order => (

            <div
              className="order-card"
              key={order.id}
            >

              <h3>
                Order ID :
                #{order.id}
              </h3>

              <p>
                Product :
                {order.product}
              </p>

              <p>
                Price :
                ₹{order.price}
              </p>

              <p>
                Status :
                <span className="status">
                  {order.status}
                </span>
              </p>

              <button>
                Track Order
              </button>

              <button
                className="invoice-btn"
              >
                Download Invoice
              </button>

            </div>

          ))
        }

      </div>

    </Layout>
  );
}

export default Orders;