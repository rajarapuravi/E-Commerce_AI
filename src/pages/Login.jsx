import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {

   const user = {
  name: "Ravi",
  email: email
};

localStorage.setItem(
  "currentUser",
  JSON.stringify(user)
);

    dispatch(login(user));

    navigate("/profile");
  };

  return (
    <Layout>

      <div className="login-container">

        <div className="login-left">
          <h2>Login</h2>

          <p>
            Get access to your Orders,
            Wishlist and Recommendations
          </p>
        </div>

        <div className="login-right">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          <p>
            New User?
            <Link to="/signup">
              Create an account
            </Link>
          </p>

          <p>
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </p>

        </div>

      </div>

    </Layout>
  );
}

export default Login;