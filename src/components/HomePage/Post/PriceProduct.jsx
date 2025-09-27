import React from "react";
import { Eye } from "lucide-react";

function PriceProduct(props) {
  const price = props.price;
  const currencyCode = props.currencyCode;
  const quantity = props.quantity;
  function formatPriceByCode(price, currencyCode) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: currencyCode.toUpperCase() === "VND" ? 0 : 2,
      maximumFractionDigits: currencyCode.toUpperCase() === "VND" ? 0 : 2,
    });
    return formatter.format(price);
  }
  return (
    <div className="price-product">
      <div className="name-seller">
        <span style={{ fontSize: "1.3rem", color: "#3D74B6" }}>
          {formatPriceByCode(price,currencyCode)}
        </span>
        <span
          style={{ fontSize: "0.9rem", opacity: "0.5", marginTop: "0.3rem" }}
        >
          Còn {quantity} sản phẩm
        </span>
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary btn-custom btn-sm"
        style={{
          color: "black",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          marginLeft: "auto",
          display: "flex",
          padding: "5px 10px",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Eye size={20} />
        Chi tiết
      </button>
    </div>
  );
}
export default PriceProduct;
