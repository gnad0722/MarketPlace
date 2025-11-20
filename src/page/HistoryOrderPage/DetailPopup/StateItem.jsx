import React from "react";
import { PackagePlus, Loader, Truck, CheckCircle } from "lucide-react";
function StateItem(props) {
  const state = props.state;
  const current=props.current;
  return (
    <div className="notification-item " style={{ padding: "2px 0px 2px 10px" }}>
      <div
        className="btn-avt"
        style={{ backgroundColor: current ? "rgba(255, 198, 154, 0.2)":"rgba(238, 238, 238, 0.5)" }}
      >
        {state === "Đã đặt hàng" && <PackagePlus size={20} color={current?"#ff6600":"black"} />}
        {state === "Đang xử lí" && <Loader size={20} color={current?"#ff6600":"black"} />}
        {state === "Đang giao hàng" && <Truck size={20} color={current?"#ff6600":"black"}/>}
        {state === "Hoàn tất" && <CheckCircle size={20} color={current?"#ff6600":"black"} />}
      </div>
      <div className="info-notification">
        <span style={{ fontWeight: "500",color:current?"#ff6600":"black" }}>{state}</span>
        <span style={{ opacity: "0.5" }}>15/03/2024 10:30</span>
      </div>
    </div>
  );
}
export default StateItem;
