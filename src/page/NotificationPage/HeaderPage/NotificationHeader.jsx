import React from "react";
function NotificationHeader(){
    return <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: "25px", fontWeight: "500" }}>
        Thông báo
      </span>
      <span style={{ opacity: "0.5" }}>
      Bạn có 3 thông báo mới
      </span>
    </div>
}
export default NotificationHeader;