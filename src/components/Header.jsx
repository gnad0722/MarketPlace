import React from "react";
import {
  Search,
  Camera,
  Wallet,
  Bell,
  Menu,
  Sun,
  Moon,
  User,
  Settings,
  Badge,
  Home
} from "lucide-react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate=useNavigate();
  return (
    <header className="header-sticky">
      <div className="py-2 d-flex justify-content-between align-items-center px-4">
        <div className="d-flex align-items-center">
          <button
            className="btn d-flex align-items-center btn-logo "
            style={{ cursor: "default" }}
            onClick={()=>{
              navigate("/")
            }}
          >
            <div className="logo-space">
              <span style={{ color: "white", fontWeight: "bold" }}>M</span>
            </div>
            <span
              className="d-none d-md-inline"
              style={{
                fontWeight: "600",
                fontSize: "1.125rem",
                marginLeft: "0.5rem",
              }}
            >
              Marketplace
            </span>
          </button>
        </div>
        <div
          className="flex-grow-1 mx-4 relative"
          style={{ maxWidth: "28rem", minWidth: "130px" }}
        >
          <form className="input-group position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm #hashtag, @seller, sản phẩm..."
              style={{ paddingLeft: "2.5rem", borderRadius: "0.5rem" }}
            />
            <Search className="search-icon" />
          </form>
        </div>
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm d-none d-md-inline"
            style={{ color: "black" }}
          >
            Đăng bán
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm ms-3 "
            style={{ color: "black" }}
          >
            <Home className="icon-btn-size" />
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm ms-3 position-relative"
            style={{ color: "black" }}
          >
            <Bell className="icon-btn-size" />
            <div className="badge-container">
              <p style={{ margin: "0" }}>3</p>
            </div>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm ms-3 position-relative d-none d-md-inline"
            style={{ color: "black" }}
          >
            <Moon className="icon-btn-size" />
          </button>
          <button className="btn btn-outline-secondary btn-custom ms-3  btn-avt">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
              style={{ color: "black" }}
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm ms-3 position-relative d-none d-md-inline"
            style={{ color: "black" }}
          >
            <Settings className="icon-btn-size" />
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm ms-3 d-inline d-md-none"
            style={{ color: "black" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list icon-btn-size"
              viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
