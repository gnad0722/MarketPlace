import React from "react";
import ProductItem from "../../OrderPage/InfoProduct/ProductItem";
import { formatPriceByCode } from "../../../utils/utils";
function ProductContainer(props) {
  const products = props.products;
  return (
    <div className="d-flex flex-column gap-2">
      <span style={{ fontWeight: "500" }}>Sản phẩm</span>
      {products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            nameProduct={product.name}
            quantity={product.quantity}
            onOpenFeedBack={props.onOpenFeedBack}
            onClose={props.onClose}
            price={formatPriceByCode(product.price_at_purchase,"VND")}
            img={product.image_url}
            showFeedback={true}
          />
        );
      })}
      <hr style={{ margin: "0" }} />
    </div>
  );
}
export default ProductContainer;
