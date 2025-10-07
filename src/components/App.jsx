import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";
import OrderPage from "./OrderPage/OrderPage";
import UploadPage from "./UploadPage/UploadPage";
function App() {
  return (
    <div>
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
         <Route path="/upload" element={<UploadPage />} />
        <Route path="/detail" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
