import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";
import OrderPage from "./OrderPage/OrderPage";
import UploadPage from "./UploadPage/UploadPage";
import HeroPage from "./HeroPage/HeroPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/detail" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
