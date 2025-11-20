import React from "react";
function InfoOrder() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex gap-2">
        <span style={{ fontWeight: "500" }}>#ORD12345</span>
        <span className="hashtag" style={{backgroundColor:"#ff6600",color:"white", fontSize:"12px"}}>
            Hoàn tất
        </span>
        <span style={{marginLeft:"auto", fontWeight:"500",color:"#ff6600",fontSize:"17px"}}>
            36.480.000 ₫
        </span>
      </div>
      <span style={{opacity:"0.5",fontSize:"14px"}}>
        Đặt ngày 15/03/2024
      </span>
    </div>
  );
}
export default InfoOrder;
