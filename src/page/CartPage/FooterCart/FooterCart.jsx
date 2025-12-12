import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPriceByCode } from "../../../utils/utils";
function FooterCart(props) {
  const navigate = useNavigate();
  const infoCheckout = props.infoCheckout;
  const listSelected = props.listSelected;
  const items = props.items;
  const [checked, setChecked] = useState(props.checkAll);
  function handleCheck(e) {
    const isChecked = e.target.checked;
    props.onCheckAll(isChecked);
    setChecked(isChecked);
  }
  return (
    <div className="footer-cart">
      <div className="d-flex gap-2 align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
          />
        </div>
        <span>Chọn tất cả</span>
        <span style={{ marginLeft: "20px", cursor: "pointer" }}>Xóa</span>
      </div>
      <div
        className="d-flex gap-3 align-items-center"
        style={{ marginLeft: "auto" }}
      >
        <span>
          Tổng cộng ({infoCheckout.quantity} sản phẩm):{" "}
          <span style={{ color: "#ff6600" }}>
            {formatPriceByCode(infoCheckout.total, "VND")}
          </span>
        </span>
        <div
          className="btn-create"
          onClick={() => {
            navigate("/order",{
              state:{
                listItem: items.filter(item=>listSelected.includes(item.product_id))
              }
            });
          }}
        >
          <span style={{ fontWeight: "500" }}>Mua ngay</span>
        </div>
      </div>
    </div>
  );
}
export default FooterCart;
