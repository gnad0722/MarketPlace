import React from "react";
import { User, Lock, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
function FormLogin() {
  const navigate = useNavigate();
  return (
    <div className="form-login">
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Email Address</span>
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
        <User className="search-icon" />
      </form>
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Mật khẩu</span>
      <form className="input-group position-relative">
        <input
          type="password"
          className="form-control"
          placeholder="Nhập mật khẩu"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
        />
        <Lock className="search-icon" />
        <Eye className="eye-icon" />
      </form>
      <span
        className="underline-text"
        onClick={() => {
          navigate("/forgetpassword");
        }}
      >
        Quên mật khẩu?
      </span>
      <div
        className="btn-create"
        style={{ width: "100%" }}
        onClick={() => {
          navigate("/home");
        }}
      >
        <span style={{ fontWeight: "500" }}>Đăng nhập</span>
      </div>
      <div
        className="btn-add-cart"
        style={{ marginTop: "8px" }}
        onClick={() => {
          navigate("/home");
        }}
      >
        <span style={{ fontWeight: "500", fontSize: "14px" }}>
          Tiếp tục với tư cách khách
        </span>
      </div>
      <span
        style={{
          alignSelf: "center",
          paddingTop: "15px",
          opacity: "0.7",
          fontSize: "15px",
        }}
      >
        Chưa có tài khoản?
        <span
          className="underline-text"
          onClick={() => {
            navigate("/register");
          }}
        >
          Đăng ký ngay
        </span>
      </span>
    </div>
  );
}
export default FormLogin;
