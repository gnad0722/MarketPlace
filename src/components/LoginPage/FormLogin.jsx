import React from "react";
import { User, Lock, Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { checkValidAccount } from "../utils";
function FormLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="form-login">
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Email Address</span>
      <form className="input-group position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập email"
          value={email}
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <User className="search-icon" />
      </form>
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Mật khẩu</span>
      <form className="input-group position-relative">
        <input
          type={show ? "text" : "password"}
          className="form-control"
          value={password}
          placeholder="Nhập mật khẩu"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Lock className="search-icon" />
        <div
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <Eye className="eye-icon" />
          ) : (
            <EyeClosed className="eye-icon" />
          )}
        </div>
      </form>
       {!valid && (
        <span style={{ fontSize: "15px", color: "red" }}>
          *Thông tin đăng nhập hoặc mật khẩu không hợp lệ
        </span>
      )}
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
          if ((email==="" || password==="") || !checkValidAccount(email,password,"","login")) {
            setValid(false)
          }
          else{
             navigate("/home")
          }
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
