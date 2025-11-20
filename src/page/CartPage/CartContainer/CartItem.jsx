import React from "react";
import myPicture from "../../../img/iphone.webp";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CartItem(props) {
  const name = "iPhone 15 Pro Max 256GB - Chính hãng VN/A";
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  function handleCount(action) {
    setCount(action === "plus" ? count + 1 : count - 1);
  }
  return (
    <div className="cart-bar" style={{ padding: "20px 20px", gap: "7px" }}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={name}
          id={`check-${name}`}
          checked={props.checked}
          // onChange={() => {
          //   props.onCheck(name);
          // }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0",
          width: "40%",
          height: "auto",
          marginRight: "80px",
        }}
      >
        <div className="mini-img">
          <img src={myPicture} />
        </div>
        <div
          style={{
            textAlign: "left",
            alignSelf: "flex-start",
            fontSize: "15px",
            width: "100%",
          }}
        >
          <span>iPhone 15 Pro Max 256GB - Chính hãng VN/A</span>
        </div>
      </div>
      <div
        className="d-flex "
        style={{
          marginLeft: "auto",
          gap: "0px",
          alignItems: "center",
          textAlign: "center",
          fontSize: "15px",
          width: "60%",
          fontWeight: "500",
        }}
      >
        <span style={{ width: "25%", color: "#ff6a00" }}>15.000.000 ₫</span>
        <div style={{ width: "25%" }}>
          <div className="product-count">
            <button
              type="button"
              className="btn btn-outline-secondary btn-custom btn-sm ms-3 "
              style={{ color: "black", marginRight: "5px" }}
              onClick={() => {
                if (count > 1) handleCount("minus");
              }}
            >
              <Minus size={10} />
            </button>
            <div
              className="number"
              style={{ margin: "0px", padding: "4px 10px" }}
            >
              {count}
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary btn-custom btn-sm "
              style={{ color: "black", marginLeft: "5px" }}
              onClick={() => handleCount("plus")}
            >
              <Plus size={10} />
            </button>
          </div>
        </div>
        <span style={{ width: "25%", color: "#ff6a00" }}>15.000.000 ₫</span>
        <div
          className="btn-create"
          onClick={() => {
            navigate("/order");
          }}
        >
          <span style={{ fontWeight: "500" }}>Mua ngay</span>
        </div>
        <div
          style={{
            top: "5px",
            right: "10px",
            zIndex: "10",
            position: "absolute",
            cursor: "pointer",
          }}
        >
          <X size={15} />
        </div>
      </div>
    </div>
  );
}
export default CartItem;
