import React from "react";
import { useNavigate } from "react-router-dom";
function FooterCart() {
  const navigate = useNavigate();
  return (
    <div className="footer-cart">
      <div className="d-flex gap-2 align-items-center">
        <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
        //   value={name}
        //   id={`check-${name}`}
        //   checked={props.checked}
          // onChange={() => {
          //   props.onCheck(name);
          // }}
        />
      </div>
      <span>Chọn tất cả</span>
      <span style={{marginLeft:"20px", cursor:"pointer"}}>Xóa</span>
      </div>
      <div
        className="d-flex gap-3 align-items-center"
        style={{ marginLeft: "auto" }}
      >
        <span>
          Tổng cộng (0 sản phẩm): <span style={{ color: "#ff6600" }}>0₫</span>
        </span>
        <div
          className="btn-create"
          onClick={() => {
            navigate("/order");
          }}
        >
          <span style={{ fontWeight: "500" }}>Mua ngay</span>
        </div>
      </div>
    </div>
  );
}
export default FooterCart;
