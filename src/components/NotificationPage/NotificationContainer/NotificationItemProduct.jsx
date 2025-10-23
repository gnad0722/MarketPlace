import React from "react";
import { Settings, Package } from "lucide-react";
function NotificationItemProduct(props) {
  return (
    <div className="notification-item notification-item-new">
      <div
        className="btn-avt"
        style={{ backgroundColor: "rgba(255, 198, 154, 0.5)" }}
      >
        <Package size={17} color="#ff6600" />
      </div>
      <div className="info-notification">
        <span style={{ fontWeight: "500" }}>
          Đơn hàng của bạn đang được xử lý
        </span>
        <span style={{ opacity: "0.5" }}>
          Người bán đang chuẩn bị sản phẩm cho bạn.
        </span>
        <span style={{ opacity: "0.5" }}>2 giờ trước</span>
      </div>
      <div style={{marginLeft:"auto",marginRight:"5px"}}>
        <button
          type="button"
          className="btn btn-outline-secondary btn-custom btn-sm ms-3 "
          style={{
            color: "black",
          }}
        >
          <Settings className="icon-btn-size" />
        </button>
      </div>
    </div>
  );
}
export default NotificationItemProduct;
