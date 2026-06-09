import Layout from "../components/layout/Layout";
import AdminSidebar from "../components/admin/AdminSidebar";
import "./AdminDashboard.css";

function AdminDashboard() {

  return (
    <Layout>

      <div className="admin-layout">

        <AdminSidebar />

        <div className="admin-content">

          <h1>Admin Dashboard</h1>

          <div className="dashboard-cards">

            <div className="dashboard-card">
              <h2>150</h2>
              <p>Products</p>
            </div>

            <div className="dashboard-card">
              <h2>85</h2>
              <p>Orders</p>
            </div>

            <div className="dashboard-card">
              <h2>120</h2>
              <p>Users</p>
            </div>

            <div className="dashboard-card">
              <h2>₹2,50,000</h2>
              <p>Revenue</p>
            </div>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default AdminDashboard;