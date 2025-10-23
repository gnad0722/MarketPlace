import React from "react";
import { MapPin, Phone } from "lucide-react";
function InfoDelivery() {
  return (
    <div className="d-flex flex-column gap-2">
      <span style={{ fontWeight: "500" }}>
        <MapPin style={{ marginRight: "10px" }} />
        Thông tin giao hàng
      </span>
      <div className="d-flex flex-column gap-2" style={{ padding: "0 10px" }}>
        <span>Trần Thị B</span>
        <span style={{ fontSize: "15px", opacity: "0.5" }}>
          <Phone size={15} style={{ marginRight: "10px" }} />
          0907654321
        </span>
        <span style={{ fontSize: "15px", opacity: "0.5" }}>
          456 Đường DEF, Phường GHI, Quận 3, TP.HCM
        </span>
      </div>
      <hr style={{margin:"0"}} />
    </div>
  );
}
export default InfoDelivery;
