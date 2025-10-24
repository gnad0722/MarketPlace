import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Setting() {
  const [isOpen, setOpen] = useState([false, false, false]);
  const navigate = useNavigate();
  function handleOpen(index) {
    setOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }
  return (
    <div className="d-flex flex-column gap-3">
      <div className="about-me">
        <span style={{ fontWeight: "500" }}>Cài đặt thông báo</span>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column" style={{ fontSize: "14px" }}>
            <span style={{ fontWeight: "500" }}>Thông báo về đơn hàng</span>
            <span style={{ opacity: "0.7" }}>
              Nhận thông báo về đơn hàng của bạn
            </span>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckChecked"
              checked={isOpen[0]}
              onClick={() => {
                handleOpen(0);
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column" style={{ fontSize: "14px" }}>
            <span style={{ fontWeight: "500" }}>
              Thông báo từ người theo dõi
            </span>
            <span style={{ opacity: "0.7" }}>
              Nhận thông báo từ người bạn theo dõi
            </span>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckChecked"
              checked={isOpen[1]}
              onClick={() => {
                handleOpen(1);
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column" style={{ fontSize: "14px" }}>
            <span style={{ fontWeight: "500" }}>Thông báo từ hệ thống</span>
            <span style={{ opacity: "0.7" }}>Nhận thông báo từ hệ thống</span>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckChecked"
              checked={isOpen[2]}
              onClick={() => {
                handleOpen(2);
              }}
            />
          </div>
        </div>
      </div>
      <div className="about-me">
        <span style={{ fontWeight: "500" }}>Tài khoản</span>
        <div
          className="btn-add-cart"
          onClick={() => {
            navigate("/");
          }}
        >
          <span style={{ fontWeight: "490" }}>Xóa tài khoản</span>
        </div>
        <div
          className="btn-create"
          style={{ width: "100%" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <span style={{ fontWeight: "490" }}>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
}
export default Setting;
