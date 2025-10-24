import React from "react";

function FollowAndRating() {
  return (
    <div className="d-flex flex-column px-2 align-items-center">
      <div className="row  text-center" style={{ marginTop: "10px" }}>
        <div className="col-4 d-flex flex-column">
          <span style={{ fontWeight: "500" }}>42</span>
          <span
            style={{ opacity: "0.7", fontSize: "13px", textAlign: "center" }}
          >
            Bài viết
          </span>
        </div>
        <div className="col-4 d-flex flex-column">
          <span style={{ fontWeight: "500" }}>1250</span>
          <span
            style={{ opacity: "0.7", fontSize: "13px", textAlign: "center" }}
          >
            Người theo dõi
          </span>
        </div>
        <div className="col-4 d-flex flex-column">
          <span style={{ fontWeight: "500" }}>389</span>
          <span
            style={{ opacity: "0.7", fontSize: "13px", textAlign: "center" }}
          >
            Đang theo dõi
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center gap-1">
        <span style={{color:"#ff6600",fontSize:"20px",paddingBottom:"2px"}}>★</span>
        <span style={{fontWeight:"500",fontSize:"15px"}}>4.8</span>
        <span style={{opacity:"0.7",fontSize:"13px", marginLeft:"5px"}}>(156 đánh giá)</span> 
      </div>
      <span style={{opacity:"0.7",fontSize:"13px"}}>Tham gia từ tháng 3, 2020</span> 
    </div>
  );
}
export default FollowAndRating;
