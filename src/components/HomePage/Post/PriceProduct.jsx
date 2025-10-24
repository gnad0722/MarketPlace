import React from "react";
import { Eye, ShoppingCart } from "lucide-react";
import { formatPriceByCode } from "../../utils";
import { useNavigate } from "react-router-dom";
function PriceProduct(props) {
  const navigate=useNavigate();
  const price = props.price;
  const currencyCode = props.currencyCode;
  const quantity = props.quantity;
  return (
    <div className="price-product">
      <div className="name-seller">
        <span style={{ fontSize: "1.3rem", color: "#ff6a00" }}>
          {formatPriceByCode(price, currencyCode)}
        </span>
        <span
          style={{ fontSize: "0.9rem", opacity: "0.5", marginTop: "0.3rem" }}
        >
          Còn {quantity} sản phẩm
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginLeft: "auto",
        }}
      >
        <button
          type="button"
          className="btn btn-outline-secondary btn-custom btn-sm"
          style={{
            color: "black",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            display: "flex",
            padding: "5px 10px",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
          onClick={() => {
            navigate("/detail");
          }}
        >
          <Eye size={20} />
          Chi tiết
        </button>
       {props.showAddToCart && <div className="btn-create">
          <span style={{ fontWeight: "500" }}>
            <ShoppingCart
              color="white"
              size={20}
              style={{ marginRight: "5px", paddingBottom: "3px" }}
            />
            Thêm
          </span>
        </div>}
      </div>
    </div>
  );
}
export default PriceProduct;
