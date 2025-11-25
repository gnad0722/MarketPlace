import React, { useState } from "react";
import {User} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { requestPasswordReset } from "../../services/authService";
function EmailVerify() {
  const [message, setMessage] = useState({
    email: "",
    verify: ""
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  async function handleRequestPasswordReset(e) {
    e.preventDefault(); 
    try{
      const data = await requestPasswordReset(email);
      setMessage({verify: data.message})
    }
    catch(err){
       if (err.response) {
        if (err.response.status === 400) {
          const listError = err.response.data.errors;
          const msg = {};
          listError.forEach((error) => {
            msg[error.param] = error.msg;
          });
          setMessage(msg);
        } 
      }
    }
  }
  return (
    <div className="container-login">
      <div className="login-form" style={{ height: "400px", width: "420px" }}>
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
            Xác thực email để đặt lại mật khẩu
          </span>
          <span style={{ fontSize: "15px", marginTop: "5px", opacity: "0.7" }}>
            Nhập email của bạn
          </span>
        </div>
        <div className="form-login">
          <span style={{ fontWeight: "500", fontSize: "14px" }}>
            Email Address
          </span>
          <form className="input-group position-relative">
            <input
              type="email"
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
          <span style={{ color: "red" }}>{message.email}</span>
           <span style={{ color: "green" }}>{message.verify}</span>
        </div>
        <div
          className="btn-create"
          style={{ width: "100%", marginTop: "20px" }}
          onClick={handleRequestPasswordReset}
        >
          <span style={{ fontWeight: "500" }}>Xác nhận</span>
        </div>
      </div>
    </div>
  );
}
export default EmailVerify;
