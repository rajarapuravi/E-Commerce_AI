import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "./Auth.css";

function OTPVerification() {
  return (
    <Layout>
      <div className="auth-container">

        <h2>OTP Verification</h2>

        <input
          type="text"
          placeholder="Enter OTP"
        />

        <Link to="/reset-password">
          <button>
            Verify OTP
          </button>
        </Link>

      </div>
    </Layout>
  );
}

export default OTPVerification;