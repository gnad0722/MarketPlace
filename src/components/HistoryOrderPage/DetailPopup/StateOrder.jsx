import React from "react";
import StateItem from "./StateItem";
function StateOrder() {
  return (
    <div className="d-flex flex-column" style={{marginBottom:"10px"}}>
      <span style={{ fontWeight: "500", marginBottom:"10px" }}>Trạng thái đơn hàng</span>
      <StateItem state={"Đã đặt hàng"} current={false}/>
      <StateItem state={"Đang xử lí"} current={true}/>
      <StateItem state={"Đang giao hàng"}current={false}/>
      <StateItem state={"Hoàn tất"}current={false}/>
    </div>
  );
}
export default StateOrder;
