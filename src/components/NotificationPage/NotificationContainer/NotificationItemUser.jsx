import React from "react";
import { Settings, User } from "lucide-react";
function NotificationItemUser(props) {
  return (
    <div className="notification-item notification-item-new">
      <div
        className="btn-avt"
        style={{ backgroundColor: "oklch(0.558 0.288 302.321 / 0.2)" }}
      >
        <User size={17} color="oklch(.558 .288 302.321)" />
      </div>
      <div className="info-notification">
        <span style={{ fontWeight: "500" }}>
          TechStoreVN vừa đăng tải sản phẩm mới
        </span>
        <span style={{ opacity: "0.5" }}>
          Xem ngay sản phẩm mới nhất mà TechStoreVN chia sẻ.
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
export default NotificationItemUser;
