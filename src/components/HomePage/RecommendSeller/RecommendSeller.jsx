import React from "react";
import Recommend from "./Recommend";
function RecommendSeller(props) {
   const listRecommend = props.listRecommendSeller;
 return <div className="filter-container">
    <span className="title-filter" style={{marginBottom:"20px"}}>Người bán đề xuất</span>
      {listRecommend.map((item,index)=><Recommend key={index} avatar={item.avatar} name={item.name} followers={item.followers}/>)}
 </div>
}

export default RecommendSeller; 