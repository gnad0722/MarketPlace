import React from "react";
import { Settings } from "lucide-react";
function NotificationItemSystem(props) {
  return (
    <div className="notification-item ">
      <div
        className="btn-avt"
        style={{ backgroundColor: "rgba(238, 238, 238, 0.5)" }}
      >
        <Settings size={17} color="black" />
      </div>
      <div className="info-notification">
        <span style={{ fontWeight: "500" }}>
          Thông báo từ hệ thống
        </span>
        <span style={{ opacity: "0.5" }}>
         Vui lòng kiểm tra chi tiết nội dung bên dưới.
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
export default NotificationItemSystem;
