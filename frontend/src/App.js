import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/admin/productList" element={<ProductListScreen />} exact />
          <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} exact/>
          <Route path="/admin/userList" element={<UserListScreen />} exact />
          <Route path="/admin/user/:id/edit" element={<UserEditScreen />} exact />
          <Route path="/admin/orderList" element={<OrderListScreen />} exact />
          <Route path="/order/:id" element={<OrderScreen />} exact />
          <Route path="/placeorder" element={<PlaceOrderScreen />} exact />
          <Route path="/shipping" element={<ShippingScreen />} exact />
          <Route path="/payment" element={<PaymentScreen />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/register" element={<RegisterScreen />} exact />
          <Route path="/profile" element={<ProfileScreen />} exact />
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
