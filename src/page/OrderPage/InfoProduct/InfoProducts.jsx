import React from "react";
import ProductItem from "./ProductItem";
import { ShoppingCart, Package } from "lucide-react";
function InfoProduct() {
  return (
    <div className="order-info">
      <span style={{ fontWeight: "500", marginBottom: "20px" }}>
        <ShoppingCart
          color="#ff6a00"
          style={{ marginRight: "10px" }}
          size={22}
        />
        Đơn hàng của bạn
      </span>
      <ProductItem
        nameProduct="iPhone 15 Pro Max 256GB - Chính hãng VN/A"
        quantity={1}
        price="29.990.000 ₫"
      />
      <ProductItem
        nameProduct="iPhone 15 Pro Max 256GB - Chính hãng VN/A"
        quantity={1}
        price="29.990.000 ₫"
      />
       <hr style={{ color: "gray", marginBottom:"5px" }}></hr>
       <div className="d-flex justify-content-between" style={{fontSize:"15px", fontWeight:"500", opacity:"0.5"}}>
            <span>Tạm tính</span>
            <span>59.980.000 ₫</span> 
       </div>
        <div className="d-flex justify-content-between" style={{fontSize:"15px", fontWeight:"500", opacity:"0.5"}}>
            <span>Phí vận chuyển</span>
            <span>100.000 ₫</span> 
       </div>
        <hr style={{ color: "gray", marginTop:"5px" }}></hr>
        <div className="d-flex justify-content-between" style={{fontSize:"18px", fontWeight:"500"}}>
            <span>Tổng cộng</span>
            <span style={{color:"#ff6a00"}}>59.980.000 ₫</span> 
       </div>
        <div className="btn-create" style={{ width: "100%", marginTop:"7px" }}>
          <span style={{ fontWeight: "500" }}> <Package color="white" style={{marginRight:"10px"}}/>Đặt hàng</span>
        </div>
    </div>
  );
}
export default InfoProduct;
