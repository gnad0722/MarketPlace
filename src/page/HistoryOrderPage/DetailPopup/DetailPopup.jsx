import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InfoOrderPopup from "./InfoOrderPopup";
import InfoSellerPopup from "./InfoSellerPopup";
import ProductContainer from "./ProductContainer";
import InfoDelivery from "./InfoDelivery";
import InfoPayment from "./InfoPayment";
import StateOrder from "./StateOrder";
function DetailPopup(props) {
  const navigate = useNavigate();
  if (!props.isOpen) return null;
  return (
    <div className="popup-overlay " onClick={props.onClose}>
      <div
        className="popup-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="popup-header">
          <div className="d-flex flex-column">
            <span
              style={{ fontWeight: "500", color: "#ff6600", fontSize: "20px" }}
            >
              Chi tiết đơn hàng của bạn
            </span>
            <span style={{ opacity: "0.5" }}>
              Xem thông tin sản phẩm, địa chỉ giao hàng và tình trạng đơn.
            </span>
          </div>
          <button className="close-button" onClick={props.onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="popup-body">
          <InfoOrderPopup/>
          <InfoSellerPopup/>
          <ProductContainer onOpenFeedBack={props.onOpenFeedBack} onClose={props.onClose}/>
          <InfoDelivery/>
          <InfoPayment/>
          <StateOrder/>
          <div className="d-flex flex-row-reverse">
            <div
              className="btn-create"
              style={{ marginLeft: "15px" }}
              onClick={() => {
                navigate("/order");
              }}
            >
              <span style={{ fontWeight: "500" }}>Mua Lại</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPopup;
