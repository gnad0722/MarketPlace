import React from "react";
import { User, Lock, Eye, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
function FormRegister() {
  const navigate = useNavigate();
  return (
    <div className="form-login">
         <span style={{ fontWeight: "500", fontSize: "14px" }}>Họ và tên</span>
      <form className="input-group position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập họ và tên"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
        />
        <User className="search-icon" />
      </form>
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
        <Mail className="search-icon" />
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
       <span style={{ fontWeight: "500", fontSize: "14px" }}>Nhập lại mật khẩu</span>
      <form className="input-group position-relative">
        <input
          type="password"
          className="form-control"
          placeholder="Nhập lại mật khẩu"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
        />
        <Lock className="search-icon" />
        <Eye className="eye-icon" />
      </form>
      <div
        className="btn-create"
        style={{ width: "100%", marginTop:"10px" }}
        onClick={() => {
          navigate("/home");
        }}
      >
        <span style={{ fontWeight: "500" }}>Tạo tài khoản</span>
      </div>
      <span
        style={{
          alignSelf: "center",
          paddingTop: "15px",
          opacity: "0.7",
          fontSize: "15px",
        }}
      >
        Đã có tài khoản?<span className="underline-text" onClick={()=>{
            navigate("/login")
        }}>Đăng nhập ngay</span>
      </span>
    </div>
  );
}
export default FormRegister;
