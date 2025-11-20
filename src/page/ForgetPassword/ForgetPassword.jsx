import React from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
function ForgetPassword() {
  const navigate=useNavigate();
  return (
    <div className="container-login">
      <div className="login-form" style={{height:"400px", width:"420px"}}>
        <div className="header-login">
          <div
            style={{
              display: "flex",
              width: "60px",
              height: "60px",
              background: "#ff6a00",
              borderRadius: "0.8rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{ color: "white", fontWeight: "700", fontSize: "1.4rem" }}
            >
              M
            </span>
          </div>
          <span style={{ fontSize: "22px", marginTop: "20px" }}>
            Đặt lại mật khẩu
          </span>
          <span style={{ fontSize: "15px", marginTop: "5px", opacity: "0.7" }}>
            Nhập email của bạn để nhận liên kết đặt lại mật khẩu
          </span>
        </div>
        <div className="form-login">
          <span style={{ fontWeight: "500", fontSize: "14px" }}>
            Email Address
          </span>
          <form className="input-group position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập email"
              style={{
                paddingLeft: "2.5rem",
                borderRadius: "0.5rem",
                fontSize: "14px",
              }}
            />
            <Mail className="search-icon" />
          </form>
        </div>
        <div
          className="btn-create"
          style={{ width: "100%", marginTop:"20px" }}
          onClick={() => {
            navigate("/home");
          }}
        >
          <span style={{ fontWeight: "500" }}>Xác nhận</span>
        </div>
        <span
          style={{
            alignSelf: "center",
            paddingTop: "15px",
            opacity: "0.7",
            fontSize: "15px",
          }}
        >
          Nhớ mật khẩu?
          <span
            className="underline-text"
            onClick={() => {
              navigate("/login");
            }}
          >
            Đăng nhập ngay
          </span>
        </span>
      </div>
    </div>
  );
}
export default ForgetPassword;
