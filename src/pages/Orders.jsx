import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { jsPDF } from "jspdf";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!user) {
      setOrders([]);
      return;
    }

    const orderKey = `orders_${user.email}`;

    const savedOrders =
      JSON.parse(
        localStorage.getItem(orderKey)
      ) || [];

    setOrders(savedOrders.reverse());
  }, []);

  const handleTrackOrder = (order) => {
    alert(
      `Order ID: #${order.id}\n\nProduct: ${order.product}\n\nStatus: ${order.status}`
    );
  };

  const handleDownloadInvoice = (order) => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(
      "RCBK E-Commerce Invoice",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Order ID: #${order.id}`,
      20,
      50
    );

    doc.text(
      `Product: ${order.product}`,
      20,
      65
    );

    doc.text(
      `Price: Rs.${order.price}`,
      20,
      80
    );

    doc.text(
      `Status: ${order.status}`,
      20,
      95
    );

    if (order.paymentMethod) {
      doc.text(
        `Payment: ${order.paymentMethod}`,
        20,
        110
      );
    }

    if (order.orderDate) {
      doc.text(
        `Date: ${order.orderDate}`,
        20,
        125
      );
    }

    doc.line(20, 135, 190, 135);

    doc.text(
      "Thank you for shopping with RCBK!",
      20,
      155
    );

    doc.save(
      `Invoice-${order.id}.pdf`
    );
  };

  return (
    <Layout>
      <div className="orders-container">

        <h1>My Orders</h1>

        {orders.length === 0 ? (

          <div className="no-orders">
            <h2>No Orders Found</h2>
            <p>
              Place an order to see it here.
            </p>
          </div>

        ) : (

          orders.map((order) => (

            <div
              className="order-card"
              key={order.id}
            >

              <h3>
                Order ID : #{order.id}
              </h3>

              <p>
                Product : {order.product}
              </p>

              <p>
                Price : ₹{order.price}
              </p>

              <p>
                Status :
                <span className="status">
                  {" "}
                  {order.status}
                </span>
              </p>

              {order.paymentMethod && (
                <p>
                  Payment :
                  {" "}
                  {order.paymentMethod}
                </p>
              )}

              {order.orderDate && (
                <p>
                  Ordered On :
                  {" "}
                  {order.orderDate}
                </p>
              )}

              <button
                onClick={() =>
                  handleTrackOrder(order)
                }
              >
                Track Order
              </button>

              <button
                className="invoice-btn"
                onClick={() =>
                  handleDownloadInvoice(order)
                }
              >
                Download Invoice
              </button>

            </div>

          ))

        )}

      </div>
    </Layout>
  );
}

export default Orders;