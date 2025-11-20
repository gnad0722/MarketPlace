import React from "react";
function Information() {
  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <span style={{ fontWeight: "500", fontSize: "17px" }}>
        Nguyễn Văn Demo
      </span>
      <span style={{ opacity: "0.6", fontSize: "13px" }}>demo@example.com</span>
      <span style={{ opacity: "0.6", fontSize: "15px" }}>Hà Nội, Việt Nam</span>
      <span style={{ fontSize: "14px", textAlign:"center",fontFamily:"Arial, sans-serif" }}>
        Yêu thích công nghệ và thời trang. Bán hàng online từ 2020. Cam kết chất
        lượng và dịch vụ tốt nhất cho khách hàng.
      </span>
    </div>
  );
}
export default Information;
