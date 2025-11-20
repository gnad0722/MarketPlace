import React from "react";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
function SellerCard(props) {
  const infoSeller=props.infoSeller;
  const [follow,setFollowed] =useState(true);
  function handleFollow(){
    setFollowed(!follow);
  }
  return (
    <div className="product-card">
      <span style={{ fontWeight: "500", marginBottom: "20px" }}>
        Thông tin người bán
      </span>
      <div className="recommend" style={{ alignItems: "start" }}>
        <div className="avt-container">
          <span className="avt-mini">
        {infoSeller.avatar === "" ? (
          infoSeller.name[0]
        ) : (
          <img src={infoSeller.avatar} alt="avatar" />
        )}
      </span>
        </div>
        <div className="info-recommend" style={{ width: "100%" }}>
          <span style={{ fontSize: "1.1rem" }}>{infoSeller.name}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            ⭐
            <span style={{ opacity: "0.5", fontSize: "15px" }}>
              {`${infoSeller.ratingAvg.toFixed(1)} (${Intl.NumberFormat("vi-VN").format(infoSeller.feedback)} bài đánh giá)`}
            </span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            👥
            <span style={{ opacity: "0.5", fontSize: "15px" }}>
              {`${Intl.NumberFormat("vi-VN").format(infoSeller.follower)} người theo dõi`}
            </span>
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "5px", margin: "10px 0" }}>
        <div className="btn-add-cart" onClick={handleFollow}>
          <span style={{ fontWeight: "500" }}>{follow?"Đang theo dõi":"Theo dõi"}</span>
        </div>
        <div className="btn-add-cart">
          <span
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <MessageCircle size={15} />
            Nhắn tin
          </span>
        </div>
      </div>
        <div className="btn-add-cart">
          <span style={{ fontWeight: "500" }}>
            Xem cửa hàng
          </span>
        </div>
    </div>
  );
}
export default SellerCard;
