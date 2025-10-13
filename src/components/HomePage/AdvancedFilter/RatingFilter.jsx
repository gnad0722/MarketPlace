import React from "react";
import RatingItem from "./RatingItem";
function RatingFilter() {
   const listRating=[5,4,3,2,1];
  return (
    <div className="categories-container" style={{ marginTop: "20px" }}>
      <span
        style={{
          fontWeight: "500",
          marginBottom: "5px",
        }}
      >
        Đánh giá
      </span>
        {listRating.map((rating,index)=>{
            return <RatingItem key={index} rating={rating}/>
        })}
    </div>
  );
}
export default RatingFilter;
