import React from "react";
import { User, Lock, Eye, Mail, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { checkValidAccount } from "../utils";
function FormRegister() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [valid, setValid] = useState({
    email: true,
    password: true,
    username: true,
    confirm: true,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="form-login">
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Họ và tên</span>
      <form className="input-group position-relative">
        <input
          type="text"
          className="form-control"
          value={username}
          placeholder="Nhập họ và tên"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onBlur={() => {
            setValid({
              ...checkValidAccount(email, password, username, "register"),
              confirm: true,
            });
          }}
        />
        <User className="search-icon" />
      </form>
      {!valid.username && (
        <span style={{ fontSize: "15px", color: "red" }}>
          *Họ và tên không phù hợp.
        </span>
      )}
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Email Address</span>
      <form className="input-group position-relative">
        <input
          type="text"
          className="form-control"
          value={email}
          placeholder="Nhập email"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={() => {
            setValid({
              ...checkValidAccount(email, password, username, "register"),
              confirm: true,
            });
          }}
        />
        <Mail className="search-icon" />
      </form>
      {!valid.email && (
        <span style={{ fontSize: "15px", color: "red" }}>
          *Vui lòng nhập Email đúng định dạng.
        </span>
      )}
      <span style={{ fontWeight: "500", fontSize: "14px" }}>Mật khẩu</span>
      <form className="input-group position-relative">
        <input
          type={show ? "text" : "password"}
          value={password}
          className="form-control"
          placeholder="Nhập mật khẩu"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={() => {
            setValid({
              ...checkValidAccount(email, password, username, "register"),
              confirm: true,
            });
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
      {!valid.password && (
        <span style={{ fontSize: "15px", color: "red" }}>
          *Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký
          tự đặc biệt.
        </span>
      )}
      <span style={{ fontWeight: "500", fontSize: "14px" }}>
        Nhập lại mật khẩu
      </span>
      <form className="input-group position-relative">
        <input
          type={showConfirm ? "text" : "password"}
          value={confirm}
          className="form-control"
          placeholder="Nhập lại mật khẩu"
          style={{
            paddingLeft: "2.5rem",
            borderRadius: "0.5rem",
            fontSize: "14px",
          }}
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
        <Lock className="search-icon" />
        <div
          onClick={() => {
            setShowConfirm(!showConfirm);
          }}
        >
          {showConfirm ? (
            <Eye className="eye-icon" />
          ) : (
            <EyeClosed className="eye-icon" />
          )}
        </div>
      </form>
      {!valid.confirm && (
        <span style={{ fontSize: "15px", color: "red" }}>
          *Xác nhận mật khẩu không trùng khớp
        </span>
      )}
      {empty && (
        <span style={{ fontSize: "15px", color: "red" }}>
          *Vui lòng nhập đầy đủ thông tin
        </span>
      )}
      <div
        className="btn-create"
        style={{ width: "100%", marginTop: "10px" }}
        onClick={() => {
          if (
            !(
              email !== "" &&
              username !== "" &&
              password !== "" &&
              confirm !== ""
            )
          ) {
            setEmpty(true);
            setValid({
              email: true,
              password: true,
              username: true,
              confirm: true,
            });
          } else {
            setEmpty(false);
            if (confirm !== password) {
              setValid({
                email: true,
                password: true,
                username: true,
                confirm: false,
              });
            } else {
              setValid({
                email: true,
                password: true,
                username: true,
                confirm: true,
              });
                navigate("/home");
            }
          }
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
        Đã có tài khoản?
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
  );
}
export default FormRegister;
