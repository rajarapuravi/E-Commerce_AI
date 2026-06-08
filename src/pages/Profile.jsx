import Layout from "../components/layout/Layout";
import "./Profile.css";

import { useNavigate } from "react-router-dom";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  logout
} from "../redux/AuthSlice";

function Profile() {

  const user = useSelector(
    state => state.auth.user
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Layout>

      <div className="profile-container">

        <div className="profile-card">

          <h1>My Profile</h1>

          <div className="profile-section">

            <h3>Personal Information</h3>

            <p>
              Name :
              {user?.name || "Guest User"}
            </p>

            <p>
              Email :
              {user?.email || "No Email"}
            </p>

          </div>

          <div className="profile-section">

            <h3>Recent Orders</h3>

            <p>Samsung Galaxy M35</p>

            <p>Lenovo LOQ</p>

            <button
              className="profile-btn"
              onClick={() =>
                navigate("/orders")
              }
            >
              View All Orders
            </button>

          </div>

          <div className="profile-section">

            <h3>Account Settings</h3>

            <button
              className="profile-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Profile;