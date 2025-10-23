import React from "react";
function InfoOrderPopup() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex gap-2">
        <span style={{ fontWeight: "500" }}>#ORD12345</span>
      </div>
      <span style={{opacity:"0.5",fontSize:"14px"}}>
        Đặt ngày 15/03/2024
      </span>
    </div>
  );
}
export default InfoOrderPopup;
