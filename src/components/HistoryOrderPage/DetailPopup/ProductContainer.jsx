import React from "react";
import ProductItem from "../../OrderPage/InfoProduct/ProductItem";
function ProductContainer() {
  return (
    <div className="d-flex flex-column gap-2">
      <span style={{ fontWeight: "500" }}>Sản phẩm</span>
      <ProductItem
        nameProduct="iPhone 15 Pro Max 256GB - Chính hãng VN/A"
        quantity={1}
        price="29.990.000 ₫"
      />
      <ProductItem
        nameProduct="iPhone 15 Pro Max 256GB - Chính hãng VN/A"
        quantity={1}
        price="29.990.000 ₫"
      />
       <hr style={{margin:"0"}} />
    </div>
  );
}
export default ProductContainer;
