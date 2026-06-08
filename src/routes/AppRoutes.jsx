import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";
import OTPVerification from "../pages/OTPVerification";
import ResetPassword from "../pages/ResetPassword";
import AIAssistant from "../pages/AIAssistant";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import OrderSuccess from "../pages/OrderSuccess";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />
        <Route
  path="/checkout"
  element={<Checkout />}
/>
        <Route
  path="/ai-assistant"
  element={<AIAssistant />}
/>
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
<Route
  path="/admin"
  element={<AdminDashboard />}
/>
<Route
  path="/category/:category"
  element={<Products />}
/>

<Route
  path="/otp-verification"
  element={<OTPVerification />}
/>
<Route
  path="/payment"
  element={<Payment />}
/>

<Route
  path="/order-success"
  element={<OrderSuccess />}
/>

<Route
  path="/reset-password"
  element={<ResetPassword />}
/>

        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;