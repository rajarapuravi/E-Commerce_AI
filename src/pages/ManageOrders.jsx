import Layout from "../components/layout/Layout";
import "./ManageOrders.css";

function ManageOrders() {

  const orders = [
    {
      id:101,
      product:"Samsung M35",
      status:"Delivered"
    },
    {
      id:102,
      product:"Lenovo LOQ",
      status:"Shipped"
    }
  ];

  return (
    <Layout>

      <div className="container">

        <h1>Manage Orders</h1>

        <table
          border="1"
          width="100%"
        >

          <thead>

            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {
              orders.map(order => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.product}</td>

                  <td>{order.status}</td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

export default ManageOrders;