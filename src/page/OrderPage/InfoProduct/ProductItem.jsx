import React, { use } from "react";
import myPicture from "../../../img/iphone.webp";
import { useNavigate } from "react-router-dom";
function ProductItem(props) {
  const navigate = useNavigate();
  const nameProduct = props.nameProduct;
  const quantity = props.quantity;
  const price = props.price;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "0",
        cursor: "pointer",
      }}
    >
      <div
        className="mini-img"
        onClick={() => {
          navigate("/detail");
        }}
      >
        <img src={myPicture} />
      </div>
      <div
        className="d-flex flex-column"
        style={{ fontSize: "13px", fontWeight: "500", width: "70%" }}
      >
        <span>{nameProduct}</span>
        <span style={{ opacity: "0.5", marginBottom: "10px" }}>
          Số lượng: {quantity}
        </span>
        <div className="d-flex justify-content-between">
          <span style={{ color: "#ff6a00" }}>{price}</span>
          <span
            style={{
              opacity: "0.5",
              textDecorationLine: "underline",
              fontSize: "15px",
            }}
            onClick={()=>{
                props.onClose();
                props.onOpenFeedBack();
            }}
          >
            Đánh giá
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
