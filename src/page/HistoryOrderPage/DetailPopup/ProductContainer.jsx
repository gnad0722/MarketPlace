import React from "react";
import ProductItem from "../../OrderPage/InfoProduct/ProductItem";
function ProductContainer(props) {
  return (
    <div className="d-flex flex-column gap-2">
      <span style={{ fontWeight: "500" }}>Sản phẩm</span>
      <ProductItem
        nameProduct="iPhone 15 Pro Max 256GB - Chính hãng VN/A"
        quantity={1}
        price="29.990.000 ₫"
        onOpenFeedBack={props.onOpenFeedBack}
        onClose={props.onClose}
      />
      <ProductItem
        nameProduct="iPhone 15 Pro Max 256GB - Chính hãng VN/A"
        quantity={1}
        price="29.990.000 ₫"
        onOpenFeedBack={props.onOpenFeedBack}
        onClose={props.onClose}
      />
      <hr style={{ margin: "0" }} />
    </div>
  );
}
export default ProductContainer;
