import React from "react";
import { CreditCard } from "lucide-react";
function InfoPayment() {
  return (
    <div className="d-flex flex-column gap-2">
      <span style={{ fontWeight: "500" }}>
        <CreditCard style={{ marginRight: "10px" }} />
        Thông tin giao hàng
      </span>
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "15px", fontWeight: "500", opacity: "0.5" }}
      >
        <span>Tạm tính</span>
        <span>59.980.000 ₫</span>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "15px", fontWeight: "500", opacity: "0.5" }}
      >
        <span>Phí vận chuyển</span>
        <span>100.000 ₫</span>
      </div>
      <hr style={{ color: "gray", marginTop: "5px" }}></hr>
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "18px", fontWeight: "500" }}
      >
        <span>Tổng cộng</span>
        <span style={{ color: "#ff6a00" }}>59.980.000 ₫</span>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "15px", fontWeight: "500", opacity: "0.5" }}
      >
        <span>Phương thức thanh toán</span>
        <span>COD</span>
      </div>
      <hr style={{ margin: "0" }} />
    </div>
  );
}
export default InfoPayment;
