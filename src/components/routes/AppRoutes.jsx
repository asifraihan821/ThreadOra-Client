import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../Layouts/MainLayout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import PaymentSuccess from "../pages/PaymentSuccess";
import AddProduct from "../pages/AddProduct";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route index path="/" element={<Home />} />
      <Route element={<MainLayout />}>
        <Route path="/shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="shop/:productId" element={<ProductDetail />} />
      </Route>
      {/* private routes */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payment/success/" element={<PaymentSuccess />}></Route>
        <Route path="products/add" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
