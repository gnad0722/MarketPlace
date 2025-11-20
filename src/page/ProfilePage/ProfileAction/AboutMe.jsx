import React from "react";
function AboutMe() {
  return (
    <div className="about-me">
      <span style={{ fontWeight: "500" }}>Thông tin cửa hàng</span>
      <div className="d-flex flex-column gap-2">
        <span style={{ fontWeight: "500", fontSize: "15px" }}>Giới thiệu</span>
        <span style={{ opacity: "0.7", fontSize: "15px" }}>
          Yêu thích công nghệ và thời trang. Bán hàng online từ 2020. Cam kết
          chất lượng và dịch vụ tốt nhất cho khách hàng.
        </span>
      </div>
      <hr style={{ margin: "0px", opacity: "0.2" }} />
      <div className="row" style={{ fontSize: "15px" }}>
        <div className="d-flex flex-column col-6 gap-2">
          <span style={{ fontWeight: "500" }}>Thống kê</span>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "14px" }}
          >
            <span>Tổng bài viết:</span>
            <span>42</span>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "14px" }}
          >
            <span>Người theo dõi:</span>
            <span>1250</span>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "14px" }}
          >
            <span style={{ paddingTop: "5px" }}>Đánh giá:</span>
            <span>
              4.8/5
              <span
                style={{
                  color: "#ff6600",
                  fontSize: "20px",
                  paddingBottom: "",
                }}
              >
                ★
              </span>
            </span>
          </div>
        </div>
        <div className="d-flex flex-column col-6 gap-2">
          <span style={{ fontWeight: "500" }}>Chính sách</span>
          <ul style={{ opacity: "0.7", fontSize: "14px", padding: "0px 20px" }}>
            <li style={{ paddingTop: "4px", paddingBottom: "4px" }}>
              Bảo hành 12 tháng
            </li>
            <li style={{ paddingTop: "4px", paddingBottom: "4px" }}>
              Đổi trả trong 7 ngày
            </li>
            <li style={{ paddingTop: "4px", paddingBottom: "4px" }}>
              Giao hàng toàn quốc
            </li>
            <li style={{ paddingTop: "4px", paddingBottom: "4px" }}>
              Hỗ trợ trả góp 0%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
