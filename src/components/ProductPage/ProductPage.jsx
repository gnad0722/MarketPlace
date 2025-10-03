import React from "react";
import Header from "../Header";
import BreadcrumnNavigation from "./BreadcrumbNavigation/BreadcrumbNavigation";
import ProductDetail from "./ProductDetail/ProductDetail";
import Feedback from "./Feedback/Feedback";
function ProductPage() {
  return (
    <div>
      <Header />
      <div className="container py-3 px-5">
        <div className="cotainer-product-page">
            <BreadcrumnNavigation title={"iPhone 15 Pro Max 256GB - Chính hãng VN/A"}/>
            <ProductDetail/>
            <Feedback/>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
