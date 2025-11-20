import React from "react";
import ProductCard from "./ProductCard";
import SellerCard from "./SellerCard";
import DescriptionProduct from "./DescriptionProduct";
import ImageProduct from "./ImageProduct";
import Feedback from "../Feedback/Feedback";
function ProductDetail() {
  const content = `iPhone 15 Pro Max mới 100%, nguyên seal, bảo hành 12 tháng chính hãng Apple Việt Nam.

📱 Thông số kỹ thuật:

- Màn hình: 6.7" Super Retina XDR OLED

- Chip: A17 Pro Bionic

- Camera: 48MP chính + 12MP góc siêu rộng + 12MP tele

- Bộ nhớ: 256GB

- Màu sắc: Titan Tự Nhiên

📦 Bao gồm:

- Máy iPhone 15 Pro Max 256GB

- Cáp USB-C to USB-C

- Tài liệu hướng dẫn

- Hộp nguyên seal

🎯 Ưu đãi đặc biệt:

- Miễn phí giao hàng toàn quốc

- Bảo hành 12 tháng chính hãng

- Đổi trả trong 7 ngày nếu có lỗi

- Hỗ trợ trả góp 0% lãi suất`;
  const hashtag = ["#iphone", "#apple"];
  const title = "iPhone 15 Pro Max 256GB - Chính hãng VN/A";
  const quantity = 20;
  const sold=150;
  const price=30000000;
  const currencyCode="VND";
  const infoSeller={
    name:"TechStore VN",
    ratingAvg:4.0,
    follower:15000,
    feedback:1300,
    avatar:""
  }
  return (
    <div className="row mt-3 ">
      <div className="col-8 gap-4 d-flex flex-column">
        <ImageProduct />
        <DescriptionProduct content={content} hashtag={hashtag} />
      </div>
      <div className="col-4 ">
        <div className="position-sticky" style={{ top: "80px" }}>
          <div className="d-flex flex-column gap-4">
            <ProductCard title={title} quantity={quantity}  sold={sold} price={price} currencyCode={currencyCode}/>
            <SellerCard infoSeller={infoSeller}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
