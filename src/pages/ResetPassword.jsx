import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "./Auth.css";

function ResetPassword() {
  return (
    <Layout>

      <div className="auth-container">

        <h2>Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <Link to="/login">
          <button>
            Update Password
          </button>
        </Link>

      </div>

    </Layout>
  );
}

export default ResetPassword;