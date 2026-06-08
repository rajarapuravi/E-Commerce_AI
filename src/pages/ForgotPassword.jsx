import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "./Auth.css";

function ForgotPassword() {
  return (
    <Layout>
      <div className="auth-container">

        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <button>
          Send OTP
        </button>

        <p>
          Back to
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </Layout>
  );
}

export default ForgotPassword;