import React from "react";
import RatingItem from "./RatingItem";
import { useState } from "react";
function RatingFilter() {
   const listRating=[5,4,3,2,1];
   const [selected,setSelected]=useState(0);
   function hanldeSelect(rating){
    if (rating===selected) setSelected(0);
     else setSelected(rating);
   }
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
            return <RatingItem key={index} rating={rating} selected={selected} onSelect={hanldeSelect}/>
        })}
    </div>
  );
}
export default RatingFilter;
