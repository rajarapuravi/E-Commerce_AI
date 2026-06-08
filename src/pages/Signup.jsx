import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./Signup.css";

function Signup() {
  return (
    <Layout>
      <div className="signup-container">

        <div className="signup-left">
          <h2>Sign Up</h2>
          <p>
            Create your RCBK account and
            start shopping smarter.
          </p>
        </div>

        <div className="signup-right">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button className="signup-btn">
            Create Account
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </div>
    </Layout>
  );
}

export default Signup;