import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {handleLogout} from "../../../services/authService";
function Setting() {
  const [isOpen, setOpen] = useState([false, false, false]);
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("token");
      navigate("/");
    }
  }
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
        <span style={{ fontWeight: "500" }}>Tài khoản</span>
         <div
          className="btn-add-cart"
          onClick={() => {
            navigate("/verify-email");
          }}
        >
          <span style={{ fontWeight: "490" }}>Đổi mật khẩu</span>
        </div>
        <div
          className="btn-create"
          style={{ width: "100%" }}
          onClick={() => {
            handleLogout();
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
